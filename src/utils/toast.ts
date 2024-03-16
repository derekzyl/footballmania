import {Toast} from 'native-base';

interface ToastProp {
  text: string;
  type?: 'success' | 'danger' | 'warning';
}

export const fireToast = ({text, type = 'danger'}: ToastProp) => {
  Toast.show({
    text,
    type: type,
    style: {backgroundColor: type === 'danger' ? '#EB5757' : '#1e263c'},
  });
};
