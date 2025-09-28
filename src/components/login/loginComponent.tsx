import { User } from "../../Types/User";
import { login } from "../../CRUD/login";
import { useState } from "react";

export interface LoginComponentProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function LoginComponent({
    email,
    password,
    setEmail,
    setPassword,
    setUser,
    setIsLoggedIn,
}: LoginComponentProps) {
    const [missingFieldsText, setMissingFieldsText] = useState<string>('');
    
    const handleLogin = async () => {
        if (email === '' || password === '') {
            setMissingFieldsText('Please fill in all fields');
            return;
        }
        try {
            const response = await login(email, password);
                if (response.message === "Login successful") {
                setUser(response.user);
                setIsLoggedIn(true);
            } else {
                setMissingFieldsText('Login failed');
            }
        } catch (error) {
            setMissingFieldsText('There was an error logging in');
            return;
        }
    }
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-bold">Email</h2>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email"
                        className="w-full rounded-md p-4 bg-gray-200"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-bold">Password</h2>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password"
                        className="w-full rounded-md p-4 bg-gray-200"
                    />
                </div>
                {missingFieldsText && <p className="text-sm text-red-500">{missingFieldsText}</p>}
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white rounded-md font-bold p-4 w-full" 
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    )
}