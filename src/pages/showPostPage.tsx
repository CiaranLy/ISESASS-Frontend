import { useEffect, useState, useCallback } from "react";
import { Post } from "../Types/Post";
import { getPost } from "../CRUD/get_post";
import { User } from "../Types/User";
import { PostComponent as PC } from "../components/viewPostComponent/postComponent";
import { EditablePostComponent as EPC } from "../components/viewPostComponent/editablePostComponent";
import { deletePost } from "../CRUD/delete_post";

export interface showPostPageProps {
    user: User;
    setUpdatePost: (updatePost: Post | null) => void;
}

export default function ShowPostPage({ 
    user, 
    setUpdatePost 
}: showPostPageProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [postErrorText, setPostErrorText] = useState<string>("");
    const [viewUserPosts, setViewUserPosts] = useState<boolean>(false);

    const [deletePostErrorText, setDeletePostErrorText] = useState<{[postId: number]: string}>({});

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

    const handleDeletePost = useCallback((post: Post) => {
        deletePost(post.id!).then((response: any) => {
            if (!response.success) {
                setDeletePostErrorText(prev => ({...prev, [post.id!]: "Error deleting post, please try again."}));
            } else {
                gatherPosts();
                setDeletePostErrorText(prev => ({...prev, [post.id!]: ""}));
            }
        });
    }, [gatherPosts]);

    const handleEditPost = useCallback((post: Post) => {
        setUpdatePost(post);
    }, []);
  
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
                            onEdit={(post) => {
                                handleEditPost(post);
                            }}
                            onDelete={(post) => {
                                handleDeletePost(post);
                            }}
                            deletePostErrorText={deletePostErrorText[post.id!]}
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