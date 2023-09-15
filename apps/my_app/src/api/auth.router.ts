import { Elysia } from 'elysia';
import { cookie } from '@elysiajs/cookie';

export default new Elysia()
	.use(cookie())
	.get('/login', ({ set, setCookie }) => {
		setCookie('accessToken', '12345', {
			httpOnly: true,
			secure: true,
			sameSite: true,
			domain: '.localhost',
			path: '/v1',
			priority: 'high',
		});
		set.redirect = '/v1/dashboard';
	})
	.get('/logout', ({ set, setCookie }) => {
		setCookie('accessToken', '', {
			httpOnly: true,
			secure: true,
			sameSite: true,
			domain: '.localhost',
			path: '/v1',
			priority: 'high',
			expires: new Date(),
		});
		set.redirect = '/v1/login';
	});
