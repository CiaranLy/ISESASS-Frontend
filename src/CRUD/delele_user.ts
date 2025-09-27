import { serverPath } from "../constants";

export const deleteUser = async (userId: number) => {
    const response = await fetch(`${serverPath}/users`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: userId}),
    });
    const data = await response.json();
    if (data.status !== 200) {
        console.log(data.status, data.error);
    }
    return data.status;
}