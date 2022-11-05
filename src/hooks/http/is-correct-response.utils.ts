import type { IHttpResponseError } from '.';

export const isCorrectResponse = <T>(
  response: T | IHttpResponseError | { isEmptyResponse: true },
): response is T => !('error' in response || 'isEmptyResponse' in response);
