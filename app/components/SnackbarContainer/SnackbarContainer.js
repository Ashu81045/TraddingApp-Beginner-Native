import * as React from 'react';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { closeSnackBar } from 'app/store/actions/snackbarAction';

export default function SnackbarContainer() {
  const dispatch = useDispatch();
  const visible = useSelector((state) =>
    get(state, 'snackbarReducer.visible', false),
  );
  const message = useSelector((state) =>
    get(state, 'snackbarReducer.message', ''),
  );
  const severity = useSelector((state) =>
    get(state, 'snackbarReducer.severity', ''),
  );

  let color = '#000';

  switch (severity) {
    case 'warning':
      color = '#ff9800';
      break;
    case 'error':
      color = '#f44336';
      break;
    case 'success':
      color = '#4caf50';
      break;
    default:
      color = '#2196f3';
  }

  const onDismissSnackBar = () => {
    dispatch(closeSnackBar());
  };

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      wrapperStyle={{
        width: '80%',
        alignSelf: 'center',
      }}
      style={{
        backgroundColor: color,
      }}>
      {message}
    </Snackbar>
  );
}
