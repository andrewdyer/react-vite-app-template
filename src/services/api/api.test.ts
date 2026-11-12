import { http, HttpResponse } from 'msw/http';
import { z } from 'zod';

import { server } from '@/mocks/server';

import { apiRequest } from './api';
import { ApiError } from './ApiError';

/**
 * The schema of the test resource returned by the mocked endpoint.
 */
const greetingSchema = z.object({ message: z.string() });

describe('apiRequest', () => {
  it('should return the validated response body', async () => {
    server.use(
      http.get('*/greeting', () => HttpResponse.json({ message: 'Hello' }))
    );

    await expect(apiRequest('/greeting', greetingSchema)).resolves.toEqual({
      message: 'Hello',
    });
  });

  it('should request the path relative to the configured API URL', async () => {
    let requestedUrl = '';
    server.use(
      http.get('*/greeting', ({ request }) => {
        requestedUrl = request.url;
        return HttpResponse.json({ message: 'Hello' });
      })
    );

    await apiRequest('/greeting', greetingSchema);

    expect(requestedUrl).toBe(`${import.meta.env.VITE_API_URL}/greeting`);
  });

  it('should throw an ApiError with the status when the response is not successful', async () => {
    server.use(
      http.get('*/greeting', () => new HttpResponse(null, { status: 503 }))
    );

    const request = apiRequest('/greeting', greetingSchema);

    await expect(request).rejects.toBeInstanceOf(ApiError);
    await expect(request).rejects.toMatchObject({ status: 503 });
  });

  it('should throw when the response body does not match the schema', async () => {
    server.use(
      http.get('*/greeting', () => HttpResponse.json({ message: 42 }))
    );

    await expect(
      apiRequest('/greeting', greetingSchema)
    ).rejects.toBeInstanceOf(z.ZodError);
  });
});
