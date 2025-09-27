import { serverPath } from "../constants";

export const getPost = async () => {
    const response = await fetch(`${serverPath}/get_posts`, {
        method: 'GET',
    });
    const data = await response.json();
    if (data.status !== 200) {
        console.log(data.status, data.error);
    }
    return data;
}