import { describe, expect, test } from 'bun:test';
import { server } from '../src';

describe('GET: /api/v1/auth/login', () => {
	test('should return 302', async () => {
		const res = await server.handle(new Request('http://localhost/v1/api/auth/login'));
		expect(res.headers.get('Set-Cookie')).toEqual(
			'accessToken=12345; Domain=.localhost; Path=/v1; HttpOnly; Secure; Priority=High; SameSite=Strict'
		);
		expect(res.status).toBe(302);
	});
});

describe('GET: /v1/dashboard', () => {
	test('should return 200', async () => {
		const res = await server.handle(
			new Request('http://localhost/v1/dashboard', { headers: { Cookie: 'accessToken=12345' } })
		);
		expect(res.status).toBe(200);
	});
});
