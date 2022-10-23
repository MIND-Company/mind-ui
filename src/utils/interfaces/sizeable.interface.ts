import { Size } from "../type/size.type";

export interface ISizeable {
  size: Size;
}

export type IOptionalSizeable = Partial<ISizeable>;
