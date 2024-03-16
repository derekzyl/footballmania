import PushNotificationIOS from '@react-native-community/push-notification-ios';
import NotificationService from './notificationService';

import {Platform} from 'react-native';

interface Session {
  domain: string;
  grace_period: number;
  entry: string;
  _id: string;
  credits_to_join: number;
  date_time: Date;
  name: string;
  session_code: string;
}

export default class SessionNotification {
  sessions: Array<Session> = [];
  scheduledSessions: Array<Session> = [];
  notif: any;
  constructor(sessions: Array<Session>) {
    this.sessions = sessions;
    this.notif = new NotificationService(
      this.onRegister.bind(this),
      this.onNotification.bind(this),
    );
  }

  private onRegister() {}
  private onNotification() {}
  public scheduleNotification() {
    if (!this.sessions.length) {
      return;
    }
    this.sessions.slice(0, 1).forEach((session) => {
      if (!this.scheduledSessions.includes(session)) {
        if (Platform.OS === 'ios') {
          PushNotificationIOS.addNotificationRequest(this.makeRequest(session));
        } else {
          this.notif.scheduleNotif(this.makeRequestAndroid(session));
        }

        this.scheduledSessions.push(session);
        console.log('SCHEDULED ====>', session._id);
      }
    });
  }

  private makeRequest(session: Session) {
    return {
      id: session._id,
      title: 'Upcoming Session',
      body: `The session ${session.name} is about to start. Get started now!`,
      fireDate: this.minusMinutesFromDate(session.date_time),
    };
  }

  private makeRequestAndroid(session: Session) {
    return {
      title: 'Upcoming Session',
      message: `The session ${session.name} is about to start. Get started now!`,
      date: this.minusMinutesFromDate(new Date()),
    };
  }

  private minusMinutesFromDate(date: Date) {
    const endDate = new Date(date);
    const startdate = new Date(endDate);
    const durationInMinutes = 10;
    startdate.setMinutes(endDate.getMinutes() - durationInMinutes);
    console.log(startdate);
    return startdate;
  }
}
