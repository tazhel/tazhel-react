import { useContext } from 'react';
import { tazhelProvider } from './tazhelProvider';

const useTazhelContext = () => {
  const tazhelContext = useContext(tazhelProvider);

  return tazhelContext;
};

export default useTazhelContext;
