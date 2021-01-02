import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  visible: true,
};

export const welcomeScreenReducer = createReducer(initialState, {
  [types.HIDE_WELCOME_SCREEN](state) {
    return {
      ...state,
      visible: false,
    };
  },
});
