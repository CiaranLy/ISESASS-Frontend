interface RoomDetailsProps {
    bed: string;
    setBed: (bed: string) => void;
    bedErrorText: string;
}

export default function RoomDetails({ 
    bed, 
    setBed, 
    bedErrorText,
}: RoomDetailsProps) {
    return (
        <div className="flex-1 flex flex-col gap-2 w-full">
            <h1 className="text-lg font-bold">Room Details</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-bold">Bed</h2>
                    <input 
                        type="text" 
                        placeholder="eg. single, double etc." 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={bed}
                        onChange={(e) => setBed(e.target.value)}
                    />
                    <p className="text-sm text-red-500">{bedErrorText}</p>
                <h2 className="text-sm font-bold">Bathroom</h2>
                    <input 
                        type="text" 
                        placeholder="Bathroom" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                    />
                <h2 className="text-sm font-bold">Ensuite</h2>
                    <input 
                        type="text" 
                        placeholder="Ensuite" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                    />
                <h2 className="text-sm font-bold">Roommates</h2>
                    <input 
                        type="text" 
                        placeholder="Roommates" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                    />
            </div>
        </div>
    );
}