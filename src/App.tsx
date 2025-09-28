import React, { useState } from 'react';
import { User } from './Types/User';
import LoginPage from './pages/loginPage';
import BannerComponent from './components/bannerComponent';
import CreatePostPage from './pages/createPostPage';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [addPost, setAddPost] = useState<boolean>(false);

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
        addPost ? (
          <div className="container mx-auto p-8">
            <CreatePostPage 
              setAddPost={setAddPost}
              user={user as User}
            />
          </div>
        ) : (
        <div className="container mx-auto p-8">
          {/* TODO: Add the main page here */}
        </div>
        )
      ) : (
        <div className="container mx-auto p-8">
          <LoginPage
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      )}
    </div>
  );
}
