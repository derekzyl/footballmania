import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BlurBackground from '../Layout/blur';
import {AboutContentText} from './style';
const AboutComponent = () => {
  return (
    <BlurBackground>
      <AboutContentText bottom="10">
        Footballmaniac is a live trivia session where participants answer
        questions in real time, testing their knowledge about football. Whoever
        correctly answers all questions in a session, wins. Winners of a live
        session split the cash reward and any money earned can be sent to their
        bank account.
      </AboutContentText>

      <AboutContentText>
        If there is only one winner for a live session, that person earns the
        entire cash reward. Footballmaniac as a trivia game show, is divided
        into three (3) categories. The player for a live session will be asked
        questions based on his club, country and football in general.
      </AboutContentText>
    </BlurBackground>
  );
};

const terms = [
  {
    content:
      'By downloading or using this app, these terms will automatically apply to you. You should make sure therefore, to read them carefully before using this app. You are not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You are not allowed to attempt to extract the source code of the app and, you also should not try to translate the app into other languages or make derivative versions. The app itself and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to footballmaniactrivial company.',
  },
  {
    content:
      'Footballmaniactrivial is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you are paying for.',
  },
  {
    content:
      "The Footballmaniac App stores and processes personal data that you have provided to us in order to provide its service. It is your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone's security features and it could also mean that the FOOTBALLMANIAC app will not work properly or at all.",
  },
  {
    content:
      'This app does use third party services that declare their own Terms and Conditions.',
  },
  {
    content:
      'Link to Terms and Conditions of third party service providers used by the app',
  },

  {
    content:
      '[Google Play Services](https://policies.google.com/terms) \n [AdMob](https://developers.google.com/admob/terms)',
  },

  {
    content:
      'You should be aware that there are certain things that Footballmaniactrivial will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection could be Wi-Fi, or mobile internet provided by your mobile network provider, but footballmaniactrivial cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi or you do not  have any of your mobile data allowance left.',
  },

  {
    content:
      'If you are using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you are accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you are using the app, please be aware that we assume that you have received permission from the bill payer for using the app.',
  },

  {
    content:
      'Along the same lines, footballmaniactrivial cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged. If it runs out of battery and you can not turn it on to avail the service, footballmaniactrivial cannot accept responsibility.',
  },
  {
    content:
      'With respect to footballmaniactrivial responsibility for your use of the app, when you are using the app, it is important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you footballmaniactrivial accepts no liability for any loss -direct or indirect- you experience as a result of relying wholly on the functionality of this app.',
  },
  {
    content:
      'At some point, we may wish to update the app. The app is currently available on Android. The requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you willl need to download the updates if you want to keep using the app. Footballmaniactrivial does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application whenever offered to you. We may also wish to stop providing the app and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.',
  },
  {
    content: '*Changes to This Terms and Conditions*',
  },

  {
    content:
      'I may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page.',
  },

  {
    content: 'These terms and conditions are effective as of 2021-05-29',
  },

  {
    content: '*Contact Us*',
  },
  {
    content:
      'If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact me at footballmaniactrivial@gmail.com',
  },
];

export const TermsAndConditionContent = () => {
  return (
    <BlurBackground>
      <ScrollView>
        {terms.map((item, i) => (
          <AboutContentText key={i} bottom="10">
            {item.content}
          </AboutContentText>
        ))}
      </ScrollView>
    </BlurBackground>
  );
};

export default AboutComponent;
