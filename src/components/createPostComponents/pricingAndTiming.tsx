export interface PricingAndTimingProps {
    pricePerMonth: string;
    semester: string;
    priceErrorText: string;
    semesterErrorText: string;
    setPricePerMonth: (pricePerMonth: string) => void;
    setSemester: (semester: string) => void;
}

export default function PricingAndTiming({ 
    pricePerMonth, 
    setPricePerMonth,
    priceErrorText,
    semester, 
    setSemester,
    semesterErrorText,
}: PricingAndTimingProps) {
    
    return (
        <div className="flex-1 flex flex-col gap-2 w-full">
            <h1 className="text-lg font-bold">Pricing and Timing</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-bold">Price per Month</h2>
                    <input 
                        type="text" 
                        placeholder="Price per month" 
                        className="w-full rounded-md p-4 bg-gray-200" 
                        value={pricePerMonth} 
                        onChange={(e) => setPricePerMonth(e.target.value)} 
                    />
                    <p className="text-sm text-red-500">{priceErrorText}</p>
                <h2 className="text-sm font-bold">Semester</h2>
                <select 
                    className="w-full rounded-md p-4 bg-gray-200" 
                    value={semester} 
                    onChange={(e) => setSemester(e.target.value as string)}
                >
                    <option value="" className="text-gray-500">Choose semester</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <p className="text-sm text-red-500">{semesterErrorText}</p>
            </div>
        </div>
    );
}