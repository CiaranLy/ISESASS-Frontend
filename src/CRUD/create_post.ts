import { config } from "../config";

export const createPost = async (
    post: {
        posterId: number, 
        price: number, 
        semester: string, 
        bed: string, 
        bathroom: string, 
        ensuite: boolean, 
        roommates: number, 
        notes: string, 
        line_1: string, 
        line_2: string, 
        line_3: string, 
        city: string, 
        county: string, 
        postcode: string|null
    }) => {
    const response = await fetch(`${config.serverPath}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    const data = await response.json();
    return data.status;
}