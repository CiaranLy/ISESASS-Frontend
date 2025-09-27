import React, { useState } from 'react';
import { User } from './Types/User';
import LoginPage from './pages/loginPage';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-gray-100">
    {isLoggedIn ? (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-600">Welcome, {user?.name}</h1>
      </div>
    ) : (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">ISESASS</h1>
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

export default App;
