import QuestionBg from '@assets/svg/question-bg.svg';
import {OptionState} from '@src/hooks/types';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import BlurBackground from '../Layout/blur';
import {PlayCountdown} from './countdown';
import PlayingPoint from './points';
import {
  miscLoadingStyle,
  PlayMeta,
  ProgressBackground,
  ProgressContainer,
  QuestionNumber,
  QuestionText,
} from './style';

interface QuestionBox {
  qIndex: number;
  currentIndex: number;
  total: number;
  optionState: OptionState;
  handleSelectOption: any;
  currentQuestion: any;
  handleCountdownEnd: any;
}

const QuestionBox = ({
  qIndex,
  currentIndex,
  total,
  optionState,
  handleSelectOption,
  currentQuestion,
  handleCountdownEnd,
}: QuestionBox) => {
  const cIndex = useSharedValue(0);

  const cardStyles = useAnimatedStyle(() => {
    const tX = cIndex.value === qIndex ? 0 : -600;
    return {
      transform: [
        {
          translateX: withSpring(tX),
        },
        {
          rotate: withSpring(cIndex.value === qIndex ? '0deg' : '90deg'),
        },
      ],
      opacity: cIndex.value === qIndex ? 1 : 0,
    };
  });

  useEffect(() => {
    if (currentIndex !== cIndex.value) {
      cIndex.value = currentIndex;
      console.log('index changed', currentIndex);
    }
  }, [cIndex.value, currentIndex]);

  return (
    <Animated.View style={[miscLoadingStyle.round, cardStyles]}>
      {currentIndex === qIndex ? (
        <BlurBackground isFlex>
          <Box>
            <PlayMeta>
              <QuestionNumber>
                Question {currentIndex + 1}/{total}
              </QuestionNumber>
              <PlayingPoint />
            </PlayMeta>
          </Box>
          <ProgressContainer>
            <ProgressBackground>
              <QuestionBg width="100%" />
            </ProgressBackground>
            <Box>
              <PlayCountdown
                currentIndex={currentIndex}
                onCountdownEnd={handleCountdownEnd}
              />
            </Box>
          </ProgressContainer>
          <Box>
            <QuestionText>{currentQuestion.question}</QuestionText>
          </Box>
          {currentQuestion.options.map((opt: any, index: number) => {
            let variant = ButtonVariant.white;
            if (optionState.answered) {
              if (optionState.is_correct) {
                if (index === optionState.selectedIndex) {
                  variant = ButtonVariant.green;
                }
              } else {
                if (index === optionState.correctIndex) {
                  variant = ButtonVariant.green;
                } else if (index === optionState.selectedIndex) {
                  variant = ButtonVariant.red;
                }
              }
            }
            return (
              <Box margin="xs" key={index}>
                <CustomButton
                  onPress={() => handleSelectOption(index)}
                  variant={variant}
                  text={opt.option}
                />
              </Box>
            );
          })}
        </BlurBackground>
      ) : null}
    </Animated.View>
  );
};

export default QuestionBox;
