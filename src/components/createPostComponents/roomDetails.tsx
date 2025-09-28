interface RoomDetailsProps {
    bed: string;
    setBed: (bed: string) => void;
    bedErrorText: string;
    bathroom: string;
    setBathroom: (bathroom: string) => void;
    bathroomErrorText: string;
}

export default function RoomDetails({ 
    bed, 
    setBed, 
    bedErrorText,
    bathroom,
    setBathroom,
    bathroomErrorText,
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
                    <select 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={bathroom}
                        onChange={(e) => setBathroom(e.target.value)}
                    >
                        <option value="" className="text-gray-500">Choose bathroom type</option>
                        <option value="2">Shared</option>
                        <option value="3">Personal</option>
                    </select>
                    <p className="text-sm text-red-500">{bathroomErrorText}</p>
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