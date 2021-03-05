import { IProfileResponse } from './IProfileResponse';

export interface IPostResponse {
  id: number;
  title: string;
  slug: string;
  url: string;
  user_id: number;
  moderation?: string | null;
  transliterated?: string;
  contents_short: string;
  contents: string;
  published_at: string;
  is_published: boolean;
  is_shared: boolean;
  updated_at: string;
  translation_source?: string | null;
  trend_at: string;
  reading_time: number;
  points: number;
  views_count: number;
  clips_count: number;
  comments_count: number;
  trending: boolean;
  is_draft: boolean;
  is_public: boolean;
  thumbnail_url?: string | null;
  user: {
    data: IProfileResponse;
  };
}
