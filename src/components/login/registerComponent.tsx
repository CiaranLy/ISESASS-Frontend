import { useState } from "react";
import { createUser } from "../../CRUD/create_user";
import { User } from "../../Types/User";
import { login } from "../../CRUD/login";

export interface RegisterComponentProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function RegisterComponent({
    email,
    password,
    setEmail,
    setPassword,
    setUser,
    setIsLoggedIn,
}: RegisterComponentProps) {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [missingFieldsText, setMissingFieldsText] = useState<string>('');
    
    const handleRegister = async () => {
        if (email === '' || password === '' || name === '' || phone === '') {
            setMissingFieldsText('Please fill in all fields');
            return;
        }
        try {
            await createUser({email, name,password, phone});
        } catch (error) {
            setMissingFieldsText('There was an error creating the user');
            return;
        }
        try {
            const response = await login(email, password);
            if (response.message === "Login successful") {
                setUser(response.user);
                setIsLoggedIn(true);
            } else {
                setMissingFieldsText('Login failed');
                return;
            }
        } catch (error) {
            setMissingFieldsText('There was an error logging in');
            return;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">Register</h1>
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
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-bold">Name</h2>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name"
                        className="w-full rounded-md p-4 bg-gray-200"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-bold">Phone</h2>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Enter your phone number"
                        className="w-full rounded-md p-4 bg-gray-200"
                    />
                </div>
                {missingFieldsText && <p className="text-sm text-red-500">{missingFieldsText}</p>}
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white rounded-md font-bold p-4 w-full"
                    onClick={handleRegister}
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}