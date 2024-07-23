import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';

export const QuestionBlockContainer = styled(View)`
  position: relative;
`;

export const LoadingText = styled(StyledText)`
  text-align: center;
  font-size: 20px;
  color: #051f32;
  color: #fff;
  margin-bottom: ${responsive.height(2)}px;
`;

export const PlayContainer = styled(View)`
  flex: 1;
  width: 100%;
`;

export const LoadingContainer = styled(PlayContainer)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LoadingCenter = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LoadingFlex = styled(View)`
  justify-content: center;
  flex: 1;
`;

export const PlayContent = styled(View)`
  width: 100%;
  flex: 1;
`;

export const LoadingContent = styled(View)`
  height: ${responsive.height(50)};
  width: 100%;
`;

export const LoadingProgressContainer = styled(View)`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 158px;
`;

export const ProgressIcon = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProgressTextArea = styled(View)`
  background-color: #1e263c;
  border-radius: 100px;
  margin: 10px;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const ProgressText = styled(StyledText)`
  color: #fff;
  font-size: 50px;
`;

export const ProgressTextSmall = styled(ProgressText)`
  font-size: 30px;
`;

export const QuestionText = styled(StyledText)`
  color: #fff;
  text-align: center;
  font-size: 21px;
`;

export const QuestionNumber = styled(StyledText)`
  font-size: 15px;
  color: #fff;
`;

export const PlayMeta = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PointContainer = styled(View)<{alt?: boolean}>`
  flex-direction: row;
  align-items: center;
  border-radius: 29px;
  height: ${({alt}) => (alt ? 46 : 38)}px;
  padding: 0 10px;
  background-color: ${({alt}) => (alt ? '#000DFF' : '#1e263c')};
`;

export const PointLogo = styled(View)<{alt?: boolean}>`
  background-color: #fff;
  border-radius: ${({alt}) => (alt ? 36 : 29)}px;
  width: ${({alt}) => (alt ? 36 : 29)}px;
  height: ${({alt}) => (alt ? 36 : 29)}px;
  justify-content: center;
  align-items: center;
`;

export const PointText = styled(StyledText)<{alt?: boolean}>`
  font-size: ${({alt}) => (alt ? 33 : 11)}px;
  color: #fff;
  margin: 0 5px;
`;

export const PlayExtraButtonFlex = styled(View)`
  flex-direction: row;
  margin-top: ${responsive.height(4)}px;
  justify-content: space-between;
`;

export const PlayExtraButton = styled(View)`
  width: 47%;
`;

export const ProgressContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const ProgressBackground = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const miscLoadingStyle = StyleSheet.create({
  box: {
    flex: 1,
  },
  round: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
