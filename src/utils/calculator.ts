import { IPostResponse } from './../interfaces/response/IPostResponse';
import RollBar from './rollbar';

const POINTS = {
  view_count: 1,
  comments_count: 5,
  voting: 10,
  clip_count: 20,
  promoted: 50
}

export const calculate = (post: IPostResponse) => {
  let points = 
    (post.views_count * POINTS.view_count) +
    (post.comments_count * POINTS.comments_count) +
    (post.points * POINTS.voting) +
    (post.clips_count * POINTS.clip_count);
  if (post.promoted) {
    points += POINTS.promoted
  }

  const result = {
    user: post.user.data.name,
    post_id: post.id,
    views_count: post.views_count,
    comments_count: post.comments_count,
    votes: post.points,
    clips_count: post.clips_count,
    editor_choice: post.promoted,
    total_points: points
  }
  console.log(result)
  new RollBar().log(result)
  return result;
}