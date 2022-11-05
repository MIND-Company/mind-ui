import type { IGetHttpRequest } from './get-http-request.interface';
import type { IPostHttpRequest } from './post-http-request.interface';

export type IHttpRequest<T> = IGetHttpRequest | IPostHttpRequest<T>;
