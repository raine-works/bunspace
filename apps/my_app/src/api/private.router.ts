import { Elysia } from 'elysia';

export default new Elysia().get('/dashboard', () => {
	return 'Hello World';
});
