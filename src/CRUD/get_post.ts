import { config } from "../config";

export const getPost = async () => {
    const response = await fetch(`${config.serverPath}/posts`, {
        method: 'GET',
    });
    const data = await response.json();
    return data;
}