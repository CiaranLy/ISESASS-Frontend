import { Post } from "../../Types/Post";

export interface EditablePostComponentProps {
    post: Post;
}

export function EditablePostComponent({ 
    post,
}: EditablePostComponentProps) {

    return (
        <div>
            <h1>Editable Post Component</h1>
        </div>
    )
}