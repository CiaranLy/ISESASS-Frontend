import { Post } from "../../Types/Post";

export interface EditablePostComponentProps {
    post: Post;
    onEdit?: (post: Post) => void;
    onDelete?: (post: Post) => void;
    deletePostErrorText?: string;
}

export function EditablePostComponent({ 
    post,
    onEdit,
    onDelete,
    deletePostErrorText,
}: EditablePostComponentProps) {

    return (
        <div 
            className="flex flex-col items-center justify-center bg-white rounded-md p-8 w-full mb-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onEdit && onEdit(post)}
        >
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col items-start justify-center space-y-2">
                    <h1 className="text-2xl font-bold">€{post.price}/month</h1>
                    <div className="flex flex-col space-y-1">
                        <p><span className="font-semibold">Bed:</span> {post.bed}</p>
                        <p><span className="font-semibold">Bathroom:</span> {post.bathroom}</p>
                        <p><span className="font-semibold">Roommates:</span> {post.roommates}</p>
                        <p><span className="font-semibold">Ensuite:</span> {post.ensuite ? 'Yes' : 'No'}</p>
                        <p><span className="font-semibold">Semester:</span> {post.semester}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center space-y-1 text-right">
                    {post.location.line_1 && <p>{post.location.line_1}</p>}
                    {post.location.line_2 && <p>{post.location.line_2}</p>}
                    {post.location.line_3 && <p>{post.location.line_3}</p>}
                    {post.location.city && <p>{post.location.city}</p>}
                    {post.location.county && <p>{post.location.county}</p>}
                    {post.location.eircode && <p className="font-mono">{post.location.eircode}</p>}
                </div>
            </div>
            {post.notes && (
                <div className="w-full mt-4 pt-4 border-t border-gray-200">
                    <p><span className="font-semibold">Notes:</span> {post.notes}</p>
                </div>
            )}
            {onDelete && (
                <div className="mt-4">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent edit from triggering
                            onDelete(post);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-bold"
                    >
                        Delete
                    </button>
                </div>
            )}
            {deletePostErrorText && (
                <div className="mt-4">
                    <p className="text-red-500">{deletePostErrorText}</p>
                </div>
            )}
        </div>
    )
}