import {View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';

interface LoaderOverlay {
  visible: boolean;
}

const LoaderOverlay = ({visible}: LoaderOverlay) => {
  return (
    <>
      {visible && (
        <LoaderOverlayContainer>
          <ActivityIndicator color="#fff" size={'large'} />
        </LoaderOverlayContainer>
      )}
    </>
  );
};

const LoaderOverlayContainer = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export default LoaderOverlay;
