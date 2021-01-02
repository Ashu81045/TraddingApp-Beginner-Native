import * as types from './types';

export function openSnackBar(response) {
  return {
    type: types.SNACKBAR_OPEN,
    response,
  };
}

export function closeSnackBar() {
  return {
    type: types.SNACKBAR_CLOSE,
  };
}
