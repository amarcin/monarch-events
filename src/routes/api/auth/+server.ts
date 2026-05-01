import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const clientId = env.GITHUB_CLIENT_ID;
	if (!clientId) {
		return new Response('GITHUB_CLIENT_ID not configured', { status: 500 });
	}

	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: `${url.origin}/api/auth/callback`,
		scope: 'repo,user',
		state: crypto.randomUUID()
	});

	throw redirect(302, `https://github.com/login/oauth/authorize?${params}`);
};
