import { config } from "../config";

export const getUser = async (userId: number) => {
    const response = await fetch(`${config.serverPath}/get_user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify({userID: userId }),   
    });
    const data = await response.json();
    return data;
}