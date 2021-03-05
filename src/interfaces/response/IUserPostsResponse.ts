import { IPostResponse } from './IPostResponse';

export interface IUserPostsResponse {
  data: {
    data: IPostResponse[];
  };
}
