import { User } from "../Types/User";

export interface BannerComponentProps {
    user: User | null;
}
export default function BannerComponent({ 
    user,
}: BannerComponentProps) {
    return (
        <>
        <div className="bg-green-500 p-4 flex items-center">
            <div className="flex-1"></div>
            <h1 className="text-white text-2xl font-bold">ISESASS</h1>
            <div className="flex-1 flex justify-end">
                {user && (
                    <h1 className="text-white text-xl font-bold">{user.name}</h1>
                )}
            </div>
        </div>
        </>
    )
}