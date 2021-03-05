import AxiosInstance from "../utils/axios";
import { IStatsResponse } from "../interfaces/response/IStatsResponse";
import { IUserPostsResponse } from "../interfaces/response/IUserPostsResponse";
class ApiService {
  private viblo;

  constructor() {
    this.viblo = new AxiosInstance().create();
  }

  getOrganizationsStats(
    groupSlug: string,
    fromLastMonth: string,
    toLastMonth: string
  ): Promise<IStatsResponse> {
    return new Promise((resolve, reject) => {
      try {
        const response = this.viblo.get(`organizations/${groupSlug}/stats`, {
          params: {
            from: fromLastMonth,
            to: toLastMonth,
          },
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  getPostsByUser(username: string): Promise<IUserPostsResponse> {
    return new Promise((resolve, reject) => {
      try {
        const response = this.viblo.get(`users/${username}/posts?limit=20`);

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ApiService;
