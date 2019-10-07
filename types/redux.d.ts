export interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  headers?: { [x: string]: string };
  status?: number;
  ok?: boolean;
  err?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export interface Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: (...args: any[]) => void;
}
