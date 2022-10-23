export interface IClickabelWithId {
  id: string | number;
  onClick: (id: string | number) => void;
}
