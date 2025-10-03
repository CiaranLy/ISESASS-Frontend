import { Post } from "../Types/Post";
import { User } from "../Types/User";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export interface BannerComponentProps {
    user: User | null;
    setUser: (user: User | null) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    addPost: boolean;
    setAddPost: (addPost: boolean) => void;
    updatePost: Post | null;
}
export default function BannerComponent({ 
    user,
    setUser,
    setIsLoggedIn,
    addPost,
    setAddPost,
    updatePost,
}: BannerComponentProps) {
    return (
        <>
        <div className="bg-green-500 p-4 flex items-center">
            <div className="flex-1 flex justify-start">
                {user && !updatePost && 
                    (!addPost ? (
                        <div className="flex items-center gap-2 bg-white rounded-md p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 border-0">
                            <button 
                                className="text-green-500 p-2 font-bold"
                                onClick={() => setAddPost(true)}
                                >+ Add Post
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 bg-green-500 rounded-md p-2 hover:bg-green-500 focus:bg-green-500 focus:outline-none focus:ring-0 border-0">
                            <div 
                                className="text-green-500 p-2 font-bold"
                                >← Back
                            </div>
                        </div>
                ))}
            </div>
            <h1 className="text-white text-2xl font-bold">ISESASS</h1>
            <div className="flex-1 flex justify-end">
                {user && !updatePost && (
                    !addPost && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <h1 className="text-white text-xl font-bold">{user.name}</h1>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                                className="bg-white rounded-md p-2"
                                side="bottom"
                                align="end"
                                sideOffset={5}
                            >
                                <DropdownMenuItem className="hover:bg-white focus:bg-white focus:outline-none focus:ring-0 border-0">
                                    <div className="flex items-center gap-2 p-2">Email: {user.email}</div>
                                    <div className="flex items-center gap-2 p-2">Phone: {user.phone}</div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-grey focus:bg-white focus:outline-none focus:ring-0 border-0">
                                    <div className="flex items-center gap-2 justify-center">
                                        <button
                                        className="text-red-500 p-2 w-full hover:bg-gray-100 rounded-md font-bold"
                                        type="button"
                                        onClick={() => {
                                            setUser(null);
                                            setIsLoggedIn(false);
                                        }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                )}
            </div>
        </div>
        </>
    )
}