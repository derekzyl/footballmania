import BaseRequest from './index';

class AuthService extends BaseRequest {
  constructor() {
    super();
  }

  login(data: any) {
    return this.api.post('/users/login', data);
  }
}

const authService = new AuthService();
export default authService;
