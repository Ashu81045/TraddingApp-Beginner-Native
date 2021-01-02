import * as types from './types';
export function hideWelcomeScreen(response) {
  return {
    type: types.HIDE_WELCOME_SCREEN,
    response,
  };
}