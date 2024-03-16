import BaseRequest from './index';

class ProfileService extends BaseRequest {
  constructor() {
    super();
  }

  async update(data: any) {
    console.log('---------------------------------------> ', data);
    const dataP = this.api.patch('/users/profile/update', data);
    console.log(dataP, '---------------------------------------> ');
    return dataP;
  }

  get() {
    return this.api.get('/users');
  }

  fetchCredit() {
    return this.api.get('/credits/user');
  }
}

const profileService = new ProfileService();
export default profileService;
