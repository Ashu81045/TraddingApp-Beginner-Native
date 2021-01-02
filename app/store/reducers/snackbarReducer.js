import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  visible: false,
  message: '',
  severity: '',
};

export const snackbarReducer = createReducer(initialState, {
  [types.SNACKBAR_OPEN](state, action) {
    return {
      ...state,
      visible: true,
      message: action.response.message,
      severity: action.response.severity,
    };
  },
  [types.SNACKBAR_CLOSE](state, action) {
    return {
      ...state,
      visible: false,
    };
  },
});
