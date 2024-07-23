import { action } from 'typesafe-actions';
import playService from '../../services/play';
import {
  AnsweredQuestion,
  CurrentSession,
  PlayActions,
  Question,
  Session,
} from '../reducers/play/types';
import { RootState } from '../store';

export const getPracticeSessionAction =
  (onSuccess: () => void) => async (dispatch: any) => {
    try {
      const response = await playService.getPracticeSessionQuestions();
      const data: Question[] = response.data.data;
      const newSession: CurrentSession = {
        questions: data,
        answers: [],
        type: 'PRACTICE',
      };
      dispatch(action(PlayActions.CREATE_NEW_SESSION, newSession));
      onSuccess();
    } catch (error: any) {
      const errorData = error.response?.data;
      const msg = errorData.message;
      console.log(msg);
    }
  };

export const getLiveSessionAction =
  (code: string, onSuccess: () => void) => async (dispatch: any) => {
    try {
      const response = await playService.getLiveSessionQuestions(code);
      const data: Question[] = response.data.data;
      console.log('888888888888888888888888888888888888888888888888888888888');
      console.log({data});
      console.log('888888888888888888888888888888888888888888888888888888888');

      const newSession: CurrentSession = {
        questions: data,
        answers: [],
        type: 'LIVE',
        session_code: code,
      };
      dispatch(action(PlayActions.CREATE_NEW_SESSION, newSession));
      onSuccess();
    } catch (error: any) {
      const errorData = error.response?.data;
      const msg = errorData.message;
      console.log(msg);
    }
  };

export const joinLiveSessionAction =
  (
    session: Session,
    onSuccess: (session_code: string, timeDiff: number) => void,
    onError: (msg: string) => void,
  ) =>
  async () => {
    try {
      const payload = {session_id: session._id};
      const data = await playService.joinLiveSession(payload);
      const timeDiff =
        new Date(session.date_time).getTime() - new Date().getTime();

      console.log({timeDiff});
      console.log({data});

      onSuccess(session.session_code, timeDiff);
    } catch (error: any) {
      const errorData = error.response?.data;
      const msg = errorData.message;
      onError(msg);
    }
  };

export const appendAnswerAction =
  (id: number, answer: AnsweredQuestion) => (dispatch: any, getState: any) => {
    try {
      const state: RootState = getState();
      const answers = [...state.play.currentSession.answers];
      answers[id] = answer;
      dispatch(action(PlayActions.UPDATE_ANSWERS, answers));
    } catch {
      //
    }
  };

export const submitLiveSessionAction =
  (onSuccess: any, onError?: any) => async (dispatch: any, getState: any) => {
    try {
      const state: RootState = getState();
      const currentSession = state.play.currentSession;
      const payload = {
        session_code: currentSession.session_code,
        questions_answered: currentSession.answers,
      };
      currentSession.answers.map(it => console.log(it.credit_earned));
      const response = await playService.submitLiveSession(payload);
      const data = response.data.data;
      onSuccess(data);
    } catch (error: any) {
      const errorData = error.response?.data;
      const msg = errorData?.message;
      onError?.(msg);
    }
  };

export const submitPracticeSessionAction =
  (onSuccess: any, onError?: any) => async (dispatch: any, getState: any) => {
    try {
      const state: RootState = getState();
      const currentSession = state.play.currentSession;
      const payload = {
        questions_answered: currentSession.answers,
      };
      console.log(payload);
      const response = await playService.submitPracticeSession(payload);
      const data = response.data.data;
      console.log(data);
      onSuccess(data);
    } catch (error: any) {
      const errorData = error.response?.data;
      console.log(error);
      const msg = errorData?.message;
      console.log(errorData?.message);
      onError?.(msg);
    }
  };

export const getSessionResultAction =
  (code: any, onSuccess: any, onError?: any) => async () => {
    try {
      const response = await playService.liveSessionResult(code);
      const data = response.data.data;
      console.log(data);
      onSuccess(data);
    } catch (error: any) {
      const errorData = error.response?.data;
      console.log(error);
      const msg = errorData?.message;
      onError?.(msg);
    }
  };

export const getAllLiveSessions =
  (onSuccess?: any) => async (dispatch: any) => {
    try {
      const response = await playService.getAllLiveSessions();
      const data: Session[] = response.data.data;
      dispatch(action(PlayActions.UPDATE_ALL_SESSIONS, data));
      onSuccess?.();
    } catch {
      //
    }
  };
