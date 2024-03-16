import CustomModal from '@src/components/General/CustomModal';
import {
  PaymentCancelText,
  PaymentModalContent,
  PaymentSafeArea,
  PaymentTopContainer,
} from '@src/components/Payment/style';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';

interface PaymentModal {
  visible: boolean;
  close: () => void;
  onDone: () => void;
  url: string;
}

export const PaymentModal = ({visible, close, url, onDone}: PaymentModal) => {
  return (
    <CustomModal useSwipe={false} noChild visible={visible} close={close}>
      <PaymentSafeArea>
        <PaymentTopContainer>
          <TouchableOpacity onPress={close}>
            <PaymentCancelText>Cancel</PaymentCancelText>
          </TouchableOpacity>
        </PaymentTopContainer>
        <PaymentModalContent>
          <WebView
            javaScriptEnabled
            source={{uri: url}}
            onNavigationStateChange={(state) => {
              if (state.url.includes('trxref')) {
                onDone();
              }
            }}
          />
        </PaymentModalContent>
      </PaymentSafeArea>
    </CustomModal>
  );
};
