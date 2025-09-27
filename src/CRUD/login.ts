import { serverPath } from "../constants";

export const login = async (email: string, password: string) => {
    const response = await fetch(`${serverPath}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status === 200) {
        return data.user;
    } else {
        console.log(data.status, data.message);
        return null;
    }
    return data.status;
}