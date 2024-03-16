// import { AdMobRewarded } from 'react-native-admob';
import { geRewaredeAdUnit } from './_constants';

class AdmobService {
  init() {
    const unitId = geRewaredeAdUnit();
    console.log(' this is supposed to be setting unut', unitId);
    // AdMobRewarded.setAdUnitID(unitId);
  }

  triggerFreeCredit(onDone: () => void) {
    // AdMobRewarded.removeAllListeners();
    // AdMobRewarded.addEventListener('rewarded', () => {
    //   onDone?.();
    //   console.log('done...');
    // });
    // AdMobRewarded.requestAd().then(() => {
    //   AdMobRewarded.showAd();
    // });
  }
}

const admobService = new AdmobService();
export default admobService;
