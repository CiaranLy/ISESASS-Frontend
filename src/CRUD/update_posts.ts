import { config } from "../config";

export const updatePost = async (
    post: {
        id: number,
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
        eircode: string|null
    }) => {
    const response = await fetch(`${config.serverPath}/posts`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    return response.status;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}                                                                                                                                                                                                                                                                   