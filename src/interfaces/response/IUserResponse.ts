export interface IUserResponse {
    id: number;
    url: string;
    avatar: string;
    name: string;
    username: string;
    followers_count: number;
    total_viblo_reputations: number;
    posts_count: number;
    banned_at?: string;
    total_viblo_posts: number;
    total_viblo_postviews: number;
    total_organization_posts: number;
    total_viblo_answers: number;
}