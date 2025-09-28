import { config } from "../config";

export const login = async (email: string, password: string) => {
    const response = await fetch(`${config.serverPath}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data
}