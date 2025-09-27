import { config } from "../config";

export const login = async (email: string, password: string) => {
    const response = await fetch(`${config.serverPath}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status !== 200) {
        console.log(data.status, data.message);
    }
    return data
}