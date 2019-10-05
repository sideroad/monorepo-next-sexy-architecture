export interface Action {
  type: string;
  body?: object;
  headers?: { [x: string]: string };
  status?: number;
  ok?: boolean;
  err?: object;
}

export interface Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: (...args: any[]) => void;
}
