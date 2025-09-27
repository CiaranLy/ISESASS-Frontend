import { config } from "../config";

export const createUser = async (user: {email: string, name: string, password: string, phone: string}) => {
    const response = await fetch(`${config.serverPath}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.status !== 200) {
        console.log(data.status, data.error);
    }
    return data.status;
}