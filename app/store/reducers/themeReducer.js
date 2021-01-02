/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  isDark: false,
};

export const themeReducer = createReducer(initialState, {
  [types.TOGGLE_THEME](state, action) {
    return { ...state, isDark: action.isDark };
  },
});
