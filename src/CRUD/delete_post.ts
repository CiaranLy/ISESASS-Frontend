import { config } from "../config";

export const deletePost = async (postId: number) => {
    const response = await fetch(`${config.serverPath}/posts`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({postId: postId}),
    });
    const data = await response.json();
    if (data.status !== 200) {
        console.log(data);
    }
    return data;
}