import { Elysia } from 'elysia';

export default new Elysia()
	.get('/', () => {
		return 'Hello world';
	})
	.get('/login', () => {
		return 'Lets get logged in';
	});
