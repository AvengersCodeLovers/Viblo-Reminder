import axios from "axios";
import { config } from '../config/app.config'
class AxiosInstance {
  public axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.viblo.asia/",
      timeout: 10000,
      headers: { Authorization: `Bearer ${config.VIBLO_TOKEN}` },
    });

    this.interceptorsSetup();
  }

  interceptorsSetup(): void {
    this.axiosInstance.interceptors.request.use(
      function (config) {
        console.log("Request: ", {
          method: config.method,
          url: config.url,
          params: config.params,
        });
        return config;
      },
      function (error) {
        console.log(error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        console.log("Response: ", {
          status: response.status,
        });
        return response;
      },
      function (error) {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  create(): any {
    return this.axiosInstance;
  }
}

export default AxiosInstance;
