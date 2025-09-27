import { serverPath } from "../constants";

export const getUser = async (userId: number) => {
    const response = await fetch(`${serverPath}/get_user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify({userID: userId }),   
    });
    const data = await response.json();
    if (data.status !== 200) {
        console.log(data.status, data.error);
    }
    return data;
}