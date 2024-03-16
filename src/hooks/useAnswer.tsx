import {appendAnswerAction} from '@src/redux/actions/play';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {PlayAnswerState} from './types';
import useTimer from './usePlayTimer';

const initialAnswerState: PlayAnswerState = {
  answered: false,
  selectedIndex: 0,
  correctIndex: 0,
  timeSpent: 0,
  is_correct: false,
  perks: {
    coins: 0,
    points: 0,
  },
  question_id: '',
  currentQuestionIndex: 0,
  used_double: false,
  attempts: 0,
};

type SelectAnswerProps = Pick<
  PlayAnswerState,
  | 'correctIndex'
  | 'currentQuestionIndex'
  | 'selectedIndex'
  | 'perks'
  | 'question_id'
>;

const useAnswer = () => {
  const timer = useTimer();
  const dispatch = useDispatch();
  const [answerState, setAnswerState] = useState(initialAnswerState);

  const processAnswer = (cIndex: number) => {
    const payload = {
      question_id: answerState.question_id,
      credit_earned: answerState.perks,
      time_spent: answerState.timeSpent,
      answer_is_correct: answerState.is_correct,
    };
    console.log('selecting', cIndex, payload);
    dispatch(appendAnswerAction(cIndex, payload));
    setAnswerState(initialAnswerState);
    timer.restartTimer();
  };

  const selectAnswer = (
    {
      correctIndex,
      selectedIndex,
      perks,
      question_id,
      currentQuestionIndex,
    }: SelectAnswerProps,
    onSelect?: () => void,
  ) => {
    const timeSpent = timer.getUsedTime();
    const is_correct = selectedIndex === correctIndex;

    if (answerState.used_double) {
      if (!is_correct) {
        if (answerState.attempts === 0) {
          console.log('try again');
          setAnswerState((st) => ({
            ...st,
            attempts: 1,
          }));
          return;
        }
        console.log('no more trial');
      }
    }

    setAnswerState({
      answered: true,
      selectedIndex: selectedIndex,
      correctIndex: correctIndex,
      timeSpent,
      perks: is_correct ? perks : initialAnswerState.perks,
      is_correct,
      question_id,
      currentQuestionIndex,
    });
    onSelect?.();
  };

  const clear = () => {
    setAnswerState(initialAnswerState);
  };

  const consumeDouble = () => {
    setAnswerState((st) => ({
      ...st,
      used_double: true,
      attempts: 0,
    }));
  };

  const optionState = {
    selectedIndex: answerState.selectedIndex,
    correctIndex: answerState.correctIndex,
    answered: answerState.answered,
    is_correct: answerState.is_correct,
  };

  return {
    selectAnswer,
    clear,
    processAnswer,
    optionState,
    consumeDouble,
  };
};

export default useAnswer;
