import { Elysia } from 'elysia';
import cookie from '@elysiajs/cookie';

export const server = new Elysia({ prefix: '/v1' })
	.use(cookie())
	.guard(
		{
			beforeHandle: ({ cookie, set }) => {
				if (!cookie.accessToken) {
					set.redirect = '/v1/login';
				}
			},
		},
		(app) => app.use(require('./api/private.router').default)
	)
	.use(require('./api/public.router').default)
	.group('/api/auth', (app) => {
		return app.use(require('./api/auth.router').default);
	})
	.onError(({ code, set }) => {
		if (code === 'NOT_FOUND') {
			set.status = 404;
			return 'Resource not found...';
		}
	})
	.listen(8080, () => {
		console.log('Server started');
	});
