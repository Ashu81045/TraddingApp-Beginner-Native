/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer.js';
import * as themeReducer from './themeReducer';
import * as snackbarReducer from './snackbarReducer';
import * as welcomeScreenReducer from './welcomeScreenReducer'

export default Object.assign(
    loginReducer,
    loadingReducer,
    themeReducer,
    snackbarReducer,
    welcomeScreenReducer
    );
