import BaseRequest from './index';

class Music extends BaseRequest {
  constructor() {
    super();
  }
  getMusicId() {
    return this.api.get('/music/all');
  }
}
const MusicService = new Music();
export default MusicService;
