import BaseRequest from './index';

class GeneralService extends BaseRequest {
  constructor() {
    super();
  }

  getAllTeams() {
    return this.api.get('/teams/all');
  }

  getAllCountries() {
    return this.api.get('/countries/all');
  }
}

const generalService = new GeneralService();
export default generalService;
