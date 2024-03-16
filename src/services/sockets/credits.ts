import baseSocket from './index';

class CreditSocket {
  emitUseCreditEvent(payload: any) {
    baseSocket.emit('user_used_credit', payload);
  }

  creditListener(callback: (data: any) => void) {
    baseSocket.addEvent('user_used_credit', callback);
  }

  emitDailyLoginEvent() {
    baseSocket.emit('daily_signin_reward', {});
  }

  dailyRewardListener(callback: (data: any) => void) {
    baseSocket.addEvent('daily_signin_reward', callback);
  }

  doneWatchingAds(ads_id: string) {
    baseSocket.emit('ads_credit_reward', {ads_id});
  }
}

const creditSocket = new CreditSocket();
export default creditSocket;
