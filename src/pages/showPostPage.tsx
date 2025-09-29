import { useEffect, useState, useCallback } from "react";
import { Post } from "../Types/Post";
import { getPost } from "../CRUD/get_post";
import { User } from "../Types/User";
import { PostComponent as PC } from "../components/viewPostComponent/postComponent";
import { EditablePostComponent as EPC } from "../components/viewPostComponent/editablePostComponent";

export interface showPostPageProps {
    user: User;
}

export default function ShowPostPage({ user }: showPostPageProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [postErrorText, setPostErrorText] = useState<string>("");
    const [viewUserPosts, setViewUserPosts] = useState<boolean>(false);

    const gatherPosts = useCallback(() => {
        try {
            getPost().then((response) => {
                const allPosts = response.posts;
                setPosts(allPosts.filter((post: Post) => post.poster && post.poster.id !== user.id) as Post[]);
                setUserPosts(allPosts.filter((post: Post) => post.poster && post.poster.id === user.id) as Post[]);
            });
        } catch (error) {
            setPostErrorText("Error fetching posts: " + error);
            setPosts([]);
            setUserPosts([]);
        }
    }, [user.id]);

    useEffect(() => {
        gatherPosts();
    }, [gatherPosts]);
  
    return (
        <>
            <button onClick={() => setViewUserPosts(!viewUserPosts)}>View User Posts</button>
            {postErrorText && 
                <h1 className="text-red-500">{postErrorText}</h1>}
            {viewUserPosts ? (
                <>
                {userPosts.map((post) => (
                     <div key={post.id}>
                         <EPC 
                            post={post} 
                        />
                     </div>
                 ))}
                </>
            ) : (
                <> 
                 {posts.map((post) => (
                 <div key={post.id}>
                     <PC 
                        post={post} 
                    />  
                 </div>
             ))}
            </>
            )}
        </>
    )
}