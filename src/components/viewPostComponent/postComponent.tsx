import { Post } from "../../Types/Post";

export interface PostComponentProps {
    post: Post;
}

export function PostComponent({ 
    post,
}: PostComponentProps) {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-gray-800 text-white p-4 rounded-md">
                    <h1 className="text-2xl font-bold">{post.location.line_1}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg">{post.location.line_2}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg">{post.location.line_3}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg">{post.location.city}</h1>
                </div>
            </div>
        </div>
    )
}