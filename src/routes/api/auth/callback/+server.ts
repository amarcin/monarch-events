import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const code = url.searchParams.get('code');
	const clientId = env.GITHUB_CLIENT_ID;
	const clientSecret = env.GITHUB_CLIENT_SECRET;

	if (!code) return new Response('Missing code', { status: 400 });
	if (!clientId || !clientSecret) {
		return new Response('OAuth not configured', { status: 500 });
	}

	const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
	});

	const data = (await tokenRes.json()) as { access_token?: string; error?: string };

	const payload =
		data.access_token && !data.error
			? { token: data.access_token, provider: 'github' }
			: { error: data.error ?? 'no token returned' };

	const status = data.access_token ? 'success' : 'error';
	const body = JSON.stringify(payload);

	const html = `<!doctype html>
<html><body>
<script>
(function() {
  function send(origin) {
    window.opener.postMessage('authorization:github:${status}:' + ${JSON.stringify(body)}, origin);
  }
  window.addEventListener('message', function(e) {
    if (e.data === 'authorizing:github') {
      send(e.origin);
    }
  }, false);
  window.opener.postMessage('authorizing:github', '*');
  // fallback — also broadcast to same origin
  setTimeout(function(){ send(location.origin); }, 400);
})();
</script>
<p>Authorizing… you can close this window.</p>
</body></html>`;

	return new Response(html, {
		headers: { 'content-type': 'text/html; charset=utf-8' }
	});
};
