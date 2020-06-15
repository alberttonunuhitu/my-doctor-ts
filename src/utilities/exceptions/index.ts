import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showError = (message: string) => {
  showMessage({
    message,
    type: 'danger',
    backgroundColor: colors.error,
    color: colors.white,
  });
};

export const showSuccess = (message: string) => {
  showMessage({
    message,
    type: 'danger',
    backgroundColor: colors.primary,
    color: colors.white,
  });
};
