import {useNavigation} from '@react-navigation/core';
import {
  getSessionResultAction,
  submitLiveSessionAction,
  submitPracticeSessionAction,
} from '@src/redux/actions/play';
import {consumeCreditAction} from '@src/redux/actions/profile';
import {SessionResult, WinnersInfo} from '@src/redux/reducers/play/types';
import {useTypedSelector} from '@src/redux/store';
import {getPassPerks} from '@src/utils/play';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import useAnswer from './useAnswer';

const initialResult = {
  correctAnswers: 0,
  total_credits_earned: {coins: 0, points: 0},
  total_time_spent: 0,
  total_questions_answered: 0,
};

const initialWInnersInfo: WinnersInfo = {
  fetching: false,
  items: [],
  show: false,
};

const usePlaySession = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultModal, setResultModal] = useState(false);
  const [winnersInfo, setWinnersInfo] = useState<WinnersInfo>(
    initialWInnersInfo,
  );

  const [sessionResult, setSessionResult] = useState<SessionResult>(
    initialResult,
  );

  const [usedBoosts, setUsedBoosts] = useState({
    usedPass: false,
    usedDouble: false,
  });

  const session = useTypedSelector((state) => state.play.currentSession);
  const currentQuestion = session.questions[currentIndex];
  const answerState = useAnswer();

  const noOfQuestions = session.questions.length;

  const [gameState, setGameState] = useState<
    'ACTIVE' | 'CLICK_DISABLED' | 'DONE'
  >('ACTIVE');

  const toNextQuestion = () => {
    if (currentIndex < noOfQuestions - 1) {
      setGameState('ACTIVE');
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameState('DONE');
      if (session.type === 'LIVE') {
        dispatch(submitLiveSessionAction(onLiveSubmitSuccess, onSubmitError));
      } else {
        dispatch(
          submitPracticeSessionAction(onPracticeSubmitSuccess, onSubmitError),
        );
      }
    }
  };

  const onLiveSubmitSuccess = (data: SessionResult) => {
    setSessionResult(data);
    setResultModal(true);
  };

  const onPracticeSubmitSuccess = (data: SessionResult) => {
    setSessionResult(data);
    setResultModal(true);
  };

  const onSubmitError = () => {
    //
  };

  const processAnswer = () => {
    answerState.processAnswer(currentIndex);
    toNextQuestion();
  };

  const getCorrectIndex = () => {
    let correctIndex = 0;
    currentQuestion.options.map((opt, index) => {
      if (opt.is_answer) {
        correctIndex = index;
      }
    });
    return correctIndex;
  };

  const selectAnswer = (selectedIndex: number) => {
    if (gameState !== 'ACTIVE') {
      return;
    }

    answerState.selectAnswer(
      {
        correctIndex: getCorrectIndex(),
        currentQuestionIndex: currentIndex,
        question_id: currentQuestion._id,
        perks: currentQuestion.perks,
        selectedIndex,
      },
      () => {
        setGameState('CLICK_DISABLED');
      },
    );
  };

  const consumePass = () => {
    if (gameState !== 'ACTIVE') {
      return;
    }

    setUsedBoosts((inp) => ({...inp, usedPass: true}));

    dispatch(consumeCreditAction('pass'));

    const correctIndex = getCorrectIndex();
    answerState.selectAnswer(
      {
        correctIndex: correctIndex,
        currentQuestionIndex: currentIndex,
        question_id: currentQuestion._id,
        perks: getPassPerks(currentQuestion.perks),
        selectedIndex: correctIndex,
      },
      () => {
        setGameState('CLICK_DISABLED');
      },
    );
  };

  const consumeDouble = () => {
    if (gameState !== 'ACTIVE') {
      return;
    }

    setUsedBoosts((inp) => ({...inp, usedDouble: true}));
    dispatch(consumeCreditAction('double'));
    answerState.consumeDouble();
  };

  const countdownDone = () => {
    processAnswer();
  };

  const closeResultModal = () => {
    setResultModal(false);
    navigation.navigate('Home');
  };

  const showWinners = () => {
    if (session.type === 'LIVE' && session.session_code) {
      setWinnersInfo((info) => ({...info, show: true, fetching: true}));
      dispatch(getSessionResultAction(session.session_code, onLiveResult));
    }
  };

  const onLiveResult = (data: any) => {
    console.log('the result', data);
    setWinnersInfo((inp) => ({...inp, fetching: false, items: data}));
  };

  const hasWinners = session.type === 'LIVE';

  return {
    selectAnswer,
    optionState: answerState.optionState,
    countdownDone,
    gameState,
    noOfQuestions,
    currentIndex,
    currentQuestion,
    consumePass,
    consumeDouble,
    sessionResult,
    resultModal,
    closeResultModal,
    usedBoosts,
    winnersInfo,
    showWinners,
    hasWinners,
  };
};

export default usePlaySession;
