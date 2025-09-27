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
        <div>
            <h1>this is the login page</h1>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            /><br />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            /><br />
            {missingFieldsText && <p className="text-red-500">{missingFieldsText}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}