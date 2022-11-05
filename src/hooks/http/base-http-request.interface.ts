import type { ContentType } from './content-type.enum';

export type IBaseHttpRequest = {
  readonly url: string;
  headers?: Record<string, string> & { contentType?: ContentType };
};
