import { View } from 'native-base';
import React from 'react';
import Animated from 'react-native-reanimated';
import usePlaySession from '../../hooks/useScore';
import Box from '../General/Box';
import PlayHeader from '../Header/play';
import PlayControls from './controls';
import QuestionBox from './question-box';
import ScoreModal from './score-modal';
import { miscLoadingStyle, PlayContainer, PlayContent } from './style';
import PlayWinners from './winners';

const PlayMain = () => {
  const {
    optionState,
    countdownDone,
    selectAnswer,
    noOfQuestions,
    currentIndex,
    currentQuestion,
    consumePass,
    consumeDouble,
    resultModal,
    closeResultModal,
    sessionResult,
    usedBoosts,
    winnersInfo,
    hasWinners,
    showWinners,
  } = usePlaySession();

  return (
    <>
      <PlayContainer>
        <PlayContent>
          {winnersInfo.show && hasWinners ? (
            <PlayWinners info={winnersInfo} />
          ) : (
            <>
              <ScoreModal
                result={sessionResult}
                close={closeResultModal}
                visible={resultModal}
                showWinners={showWinners}
                hasWinners={hasWinners}
              />
              <PlayHeader disabled />
              <Box style={miscLoadingStyle.box}>
                <Animated.View style={[miscLoadingStyle.box]}>
                  {[...new Array(noOfQuestions)].map((_, index) => (
                    <QuestionBox
                      key={index}
                      optionState={optionState}
                      currentIndex={currentIndex}
                      currentQuestion={currentQuestion}
                      handleCountdownEnd={countdownDone}
                      handleSelectOption={selectAnswer}
                      total={noOfQuestions}
                      qIndex={index}
                    />
                  ))}
                </Animated.View>
                <View>
                  <PlayControls
                    usedBoosts={usedBoosts}
                    onPass={consumePass}
                    onDouble={consumeDouble}
                  />
                </View>
              </Box>
            </>
          )}
        </PlayContent>
      </PlayContainer>
    </>
  );
};

export default PlayMain;
