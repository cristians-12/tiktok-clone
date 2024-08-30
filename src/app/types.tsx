export interface MenuItemFollowCompTypes{
    user:RandomUsers
}
export interface RandomUsers{
    id:string;
    name:string;
    image:string;
}

export interface PostMainCompTypes{
    post:Post;
}

export interface Post{
    id:string;
    user_id:string;
    video_url:string;
    text:string;
    created_at:string;
    profile:RandomUsers;
}