import { useState } from 'react';
import { User } from './Types/User';
import LoginPage from './pages/loginPage';
import BannerComponent from './components/bannerComponent';
import CreatePostPage from './pages/createPostPage';
import ShowPostPage from './pages/showPostPage';
import { Post } from './Types/Post';
import UpdatePostPage from './pages/updatePostPage';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [addPost, setAddPost] = useState<boolean>(false);
  const [updatePost, setUpdatePost] = useState<Post | null>(null);

  return (
    <div className="min-h-screen bg-gray-200">
      <BannerComponent 
        user={user}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
        addPost={addPost}
        setAddPost={setAddPost}
      />
      {isLoggedIn ? ( 
        updatePost ? (
          <div className="container mx-auto p-8">
            <UpdatePostPage 
              setUpdatePost={setUpdatePost}
              user={user as User}
              post={updatePost}
            />
          </div>
        ) : (
          addPost ? (
            <div className="container mx-auto p-8">
              <CreatePostPage 
                setAddPost={setAddPost}
                user={user as User}
              />
            </div>
          ) : (
          <div className="container mx-auto p-8">
            <ShowPostPage 
              user={user as User}
              setUpdatePost={setUpdatePost}
            />
          </div>
          )
      )
      ) : (
        <div className="container mx-auto p-8">
          <LoginPage
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      )}
    </div>
  );
}
