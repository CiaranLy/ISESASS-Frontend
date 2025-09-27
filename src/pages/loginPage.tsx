import { useState } from "react";
import { User } from "../Types/User";
import RegisterComponent from "../components/login/registerComponent";
import LoginComponent from "../components/login/loginComponent";

export interface LoginPageProps {
    user: User | null;
    setUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function LoginPage({
    user,
    setUser,
    setIsLoggedIn,
}: LoginPageProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [needsRegister, setNeedsRegister] = useState<boolean>(false);
    
    return (
        <>
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
        <div>
            <LoginComponent 
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>)}
        <div>
            {needsRegister ? (
                <button onClick={() => setNeedsRegister(false)}>Login</button>
            ) : (
                <button onClick={() => setNeedsRegister(true)}>Register</button>
            )}
        </div>
        </>
    )
}