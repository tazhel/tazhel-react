import React, { createContext, useReducer, useCallback } from 'react';
import { initialContextState, ContextState } from './tazhelTypes';
import tazhelReducer from './tazhelReducer';

export const tazhelProvider = createContext<ContextState>(initialContextState);

interface Props {
  children?: any;
}

const TazhelProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(tazhelReducer, initialContextState);

  const setPage = useCallback((value: number) => {
    dispatch({ type: 'page', payload: value });
  }, []);

  const context: ContextState = {
    ...state,
    setPage,
  };
  return (
    <tazhelProvider.Provider value={{ ...context }}>{children}</tazhelProvider.Provider>
  );
};

export default TazhelProvider;
