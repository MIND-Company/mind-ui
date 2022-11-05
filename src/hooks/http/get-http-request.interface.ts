import type { IBaseHttpRequest } from './base-http-request.interface';

export type IGetHttpRequest = {
  readonly method: 'GET';
} & IBaseHttpRequest;
