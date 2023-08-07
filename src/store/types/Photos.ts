export interface Photos {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs?: null[] | null;
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections?: null[] | null;
    sponsorship: Sponsorship;
    topic_submissions: TopicSubmissions;
    user: SponsorOrUser;
}
export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}
export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export interface Sponsorship {
    impression_urls?: string[] | null;
    tagline: string;
    tagline_url: string;
    sponsor: SponsorOrUser;
}
export interface SponsorOrUser {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links1;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}
export interface Links1 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}
export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: null;
}
export interface TopicSubmissions {}
