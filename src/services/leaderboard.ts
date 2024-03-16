import BaseRequest from './index';

class LeaderboardService extends BaseRequest {
  constructor() {
    super();
  }

  getLeaderboard(sort_by: any) {
    return this.api.get(`/leaderboard?filter=${sort_by}`);
  }
}

const leaderboardService = new LeaderboardService();
export default leaderboardService;
