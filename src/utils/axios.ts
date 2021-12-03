import axios from 'axios';
import { config } from '../config/app.config';
import Rollbar from './rollbar';

class AxiosInstance {
  public axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.viblo.asia/',
      timeout: 10000,
      headers: { Authorization: `Bearer ${config.VIBLO_TOKEN}` },
    });

    this.interceptorsSetup();
  }

  interceptorsSetup(): void {
    const _rollbar = new Rollbar();
    this.axiosInstance.interceptors.request.use(
      function (config) {
        console.log('Request: ', {
          method: config.method,
          url: config.url,
          params: config.params,
        });
        _rollbar.log({
          method: config.method,
          url: config.url,
          params: config.params,
        })
        return config;
      },
      function (error) {
        console.log(error);
        _rollbar.log(error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        console.log('Response: ', {
          status: response.status,
          url: response.config.url,
          method: response.config.method,
        });
        _rollbar.log({
          status: response.status,
          url: response.config.url,
          method: response.config.method,
        });
        return response;
      },
      function (error) {
        console.log(error);
        _rollbar.log(error);
        return Promise.reject(error);
      }
    );
  }

  create(): any {
    return this.axiosInstance;
  }
}

export default AxiosInstance;
