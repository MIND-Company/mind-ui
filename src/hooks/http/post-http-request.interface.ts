import type { IBaseHttpRequest } from './base-http-request.interface';

export type IPostHttpRequest<T> = {
  readonly method: 'POST';
  readonly body: T;
} & IBaseHttpRequest;
