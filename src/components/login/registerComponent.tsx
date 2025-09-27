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
                const userData = {
                    email: response.user.email,
                    name: response.user.name,
                    phone: response.user.phone,
                    password: response.user.password,
                };
                setUser(userData);
                setIsLoggedIn(true);
            }
            else {
                setMissingFieldsText('Login failed');
                return;
            }
        } catch (error) {
            setMissingFieldsText('There was an error logging in');
            return;
        }
    }

    return (
        <div>
            <h1>this is the register page</h1>
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
            <input 
                type="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
            /><br />
            <input 
                type="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Phone"
            /><br />
            {missingFieldsText && <p className="text-red-500">{missingFieldsText}</p>}
            <button onClick={handleRegister}>Sign up</button>
        </div>
    )
}