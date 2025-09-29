import { useEffect, useState } from "react";
import { Post } from "../Types/Post";
import { getPost } from "../CRUD/get_post";
import { User } from "../Types/User";

export interface showPostPageProps {
    user: User;
}

export default function ShowPostPage({ user }: showPostPageProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [postErrorText, setPostErrorText] = useState<string>("");

    useEffect(() => {
        getPost().then((posts) => {
            if (posts && Array.isArray(posts)) {
                setPosts(posts.filter((post: Post) => post.posterId && post.posterId.id !== user.id) as Post[]);
                setUserPosts(posts.filter((post: Post) => post.posterId && post.posterId.id === user.id) as Post[]);
            } else {
                setPostErrorText("Failed to fetch posts or posts is not an array: " + posts);
                setPosts([]);
                setUserPosts([]);
            }
        }).catch((error) => {
            setPostErrorText("Error fetching posts: " + error);
            setPosts([]);
            setUserPosts([]);
        });
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-8">
            <h1>Posts</h1>  
            {postErrorText && 
                <h1 className="text-red-500">{postErrorText}</h1>}
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>id: {post.id}</h1>
                    <h1>posterId: {post.posterId.id}</h1>
                    <h1>posterName: {post.posterId.name}</h1>
                    <h1>posterEmail: {post.posterId.email}</h1>
                    <h1>posterPhone: {post.posterId.phone}</h1>
                    <h1>price: {post.price}</h1>
                    <h1>semester: {post.semester}</h1>
                    <h1>bed: {post.bed}</h1>
                    <h1>bathroom: {post.bathroom}</h1>
                    <h1>ensuite: {post.ensuite}</h1>
                    <h1>roommates: {post.roommates}</h1>
                    <h1>notes: {post.notes}</h1>
                    <h1>line_1: {post.location.line_1}</h1>
                    <h1>line_2: {post.location.line_2}</h1>
                    <h1>line_3: {post.location.line_3}</h1>
                    <h1>city: {post.location.city}</h1>
                    <h1>county: {post.location.county}</h1>
                    <h1>eircode: {post.location.eircode}</h1>
                    <h1>--------------------------------</h1>
                </div>
            ))}
        </div>
    )
}