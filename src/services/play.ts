import BaseRequest from './index';

class PlayService extends BaseRequest {
  constructor() {
    super();
  }

  getPracticeSessionQuestions() {
    return this.api.get(
      '/questions/play?domain=PRACTICE_SESSION&team=MANU&country=NGN',
    );
  }

  getLiveSessionQuestions(code: string) {
    return this.api.get(
      `/questions/play?domain=LIVE_SESSION&session_code=${code}`,
    );
  }

  getAllLiveSessions() {
    return this.api.get('/sessions');
  }

  joinLiveSession(data: any) {
    return this.api.post('/joined-sessions', data);
  }

  submitLiveSession(data: any) {
    return this.api.post('/joined-sessions/completed', data);
  }

  submitPracticeSession(data: any) {
    return this.api.post('/joined-sessions/practice/completed', data);
  }

  liveSessionResult(code: string) {
    return this.api.get(`/leaderboard/session?session_code=${code}`);
  }
}

const playService = new PlayService();
export default playService;
