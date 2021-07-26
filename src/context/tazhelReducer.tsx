import { State, initialState, Actions } from './tazhelTypes';

const tazhelReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case 'page':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default tazhelReducer;
