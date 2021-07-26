/* eslint-disable @typescript-eslint/no-unused-vars */
export type State = {
  page: number;
};

export const initialState = {
  page: 0,
};

export type Actions = { type: 'page'; payload: number };

export type ContextState = {
  setPage: (b: number) => void;
} & State;

export const initialContextState = {
  ...initialState,
  setPage: (b: number) => {},
};
