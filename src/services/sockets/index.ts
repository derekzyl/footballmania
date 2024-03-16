import {store} from '@src/redux/store';
import SocketIOClient from 'socket.io-client';
import {baseURL} from '../_constants';

class BaseSocket {
  private socket;
  public isConnected: boolean = false;

  constructor() {
    console.log(baseURL);
    this.socket = SocketIOClient(baseURL);

    this.socket.on('connect', () => {
      console.log('-----------------------------', 'connected');
      this.isConnected = true;
    });
    this.socket.on('disconnect', () => {
      console.log('-----------------------------', 'disconnected');
      this.isConnected = false;
    });
    this.socket.on('connect_error', () => {
      console.log('-----------------------------', 'cannot connext');
    });
  }

  private appendUserId(payload: any) {
    const user_id = store.getState().profile.user.id;
    if (typeof payload === 'object') {
      const fPayload = {...payload};
      if (user_id) {
        fPayload.user_id = user_id;
      }
      return fPayload;
    } else {
      return payload;
    }
  }

  emit(event_name: string, payload: any) {
    const fPayload = this.appendUserId(payload);
    console.log('sending', event_name, fPayload);
    this.socket.emit(event_name, fPayload);
  }

  addEvent(event_name: string, callback: (data: any) => void) {
    this.socket.on(event_name, callback);
  }

  removeEvent(event_name: string) {
    this.socket.off(event_name);
  }
}

const baseSocket = new BaseSocket();
export default baseSocket;
