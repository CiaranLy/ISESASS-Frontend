import { useState } from "react";
import { User } from "../Types/User";
import RegisterComponent from "../components/login/registerComponent";
import LoginComponent from "../components/login/loginComponent";

export interface LoginPageProps {
    setUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function LoginPage({
    setUser,
    setIsLoggedIn,
}: LoginPageProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [needsRegister, setNeedsRegister] = useState<boolean>(false);
    
    return (
        <>
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-8">
            {needsRegister ? (
                <RegisterComponent 
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setUser={setUser}
                    setIsLoggedIn={setIsLoggedIn}
                />
            ) : (
                <LoginComponent 
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setUser={setUser}
                    setIsLoggedIn={setIsLoggedIn}
                />
            )}
            <div className="flex flex-col items-center justify-center">
                {needsRegister ? (
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-bold p-4" 
                        onClick={() => setNeedsRegister(false)}
                    >
                        Already have an account? Login
                    </button>
                ) : (
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-bold p-4" 
                        onClick={() => setNeedsRegister(true)}
                    >
                        Don't have an account? Register
                    </button>
                )}
            </div>
        </div>
        </>
    )
}