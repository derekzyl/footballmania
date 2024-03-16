import {store} from '@src/redux/store';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {baseURL} from './_constants';

class BaseRequest {
  protected api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL,
    });

    this.attachInterceptors();
  }

  private attachInterceptors() {
    this.api.interceptors.request.use((req: AxiosRequestConfig) => {
      try {
        const token = store.getState().auth?.access_token;
        if (token) {
          req.headers['x-access-token'] = token;
        }
      } catch {
        // do nothing
      }
      return req;
    });
  }
}

export default BaseRequest;
