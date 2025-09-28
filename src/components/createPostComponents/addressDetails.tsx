import { Counties } from "../../Constants/Counties";

export interface AddressDetailsProps {
    line_1: string;
    setLine_1: (line_1: string) => void;
    line_2: string;
    setLine_2: (line_2: string) => void;
    line_2ErrorText: string;
    line_3: string;
    setLine_3: (line_3: string) => void;
    line_3ErrorText: string;
    city: string;
    setCity: (city: string) => void;
    cityErrorText: string;
    county: string;
    setCounty: (county: string) => void;
    countyErrorText: string;
    postcode: string;
    setPostcode: (postcode: string) => void;
    postcodeErrorText: string;
    notes: string;
    setNotes: (notes: string) => void;
}

export default function AddressDetails({
    line_1,
    setLine_1,
    line_2,
    setLine_2,
    line_2ErrorText,
    line_3,
    setLine_3,
    line_3ErrorText,
    city,
    setCity,
    cityErrorText,
    county,
    setCounty,
    countyErrorText,
    postcode,
    setPostcode,
    postcodeErrorText,
    notes,
    setNotes,
}: AddressDetailsProps) {
    return (
        <div className="flex-1 flex flex-col gap-2 w-full">
            <h1 className="text-lg font-bold">Address Details</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-bold">Line 1</h2>
                    <input 
                        type="text" 
                        placeholder="Line 1" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={line_1} 
                        onChange={(e) => setLine_1(e.target.value)}
                    />
                <h2 className="text-sm font-bold">Line 2</h2>
                    <input 
                        type="text" 
                        placeholder="Line 2" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={line_2} 
                        onChange={(e) => setLine_2(e.target.value)}
                    />
                    <p className="text-sm text-red-500">{line_2ErrorText}</p>
                <h2 className="text-sm font-bold">Line 3</h2>
                    <input 
                        type="text" 
                        placeholder="Line 3" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={line_3} 
                        onChange={(e) => setLine_3(e.target.value)}
                    />
                    <p className="text-sm text-red-500">{line_3ErrorText}</p>
                <h2 className="text-sm font-bold">City</h2>
                    <input 
                        type="text" 
                        placeholder="City" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <p className="text-sm text-red-500">{cityErrorText}</p>
                <h2 className="text-sm font-bold">County</h2>
                    <select 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={county} 
                        onChange={(e) => setCounty(e.target.value)}
                    >
                        <option value="" className="text-gray-500">Select a county</option>
                        {Counties.map((county) => (
                            <option key={county} value={county}>{county}</option>
                        ))}
                    </select>
                    <p className="text-sm text-red-500">{countyErrorText}</p>
                <h2 className="text-sm font-bold">Postcode</h2>
                    <input 
                        type="text" 
                        placeholder="Postcode" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={postcode} 
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                    <p className="text-sm text-red-500">{postcodeErrorText}</p>
                <h2 className="text-sm font-bold">Extra Notes</h2>
                    <textarea 
                        placeholder="Type here" 
                        className="w-full rounded-md p-4 bg-gray-200 h-40" 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)}
                    />
            </div>
        </div>
    )
}