import BaseRequest from './index';

class StoreService extends BaseRequest {
  constructor() {
    super();
  }

  getStoreBenefits() {
    return this.api.get('/stores');
  }

  buyItem(data: any) {
    return this.api.post('/payments/initialize', data);
  }
}

const storeService = new StoreService();
export default storeService;
