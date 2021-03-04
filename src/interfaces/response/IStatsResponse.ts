import { IUserResponse } from "./IUserResponse";

export interface IStatsResponse {
  data: {
    header: {
      total_organization_posts: number;
      total_viblo_posts: number;
      total_viblo_postviews: number;
      total_viblo_answers: number;
      total_viblo_reputations: number;
    };
    users: IUserResponse[];
  };
}
