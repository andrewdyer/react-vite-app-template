/**
 * Thrown when the API responds with a status outside the 2xx range.
 */
export class ApiError extends Error {
  /**
   * The HTTP status code the API responded with, such as `404` or `503`.
   */
  readonly status: number;

  /**
   * Creates a new ApiError.
   *
   * @param status - The HTTP status code the API responded with.
   * @param path - The request path, relative to the API URL, included in the message.
   */
  constructor(status: number, path: string) {
    super(`Request to ${path} failed with status ${status}`);
    this.name = 'ApiError';
    this.status = status;
  }
}
