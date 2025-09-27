import { useState, } from "react";
import PricingAndTiming from "../components/createPostComponents/pricingAndTiming";
import { validatePricingAndTiming } from "../components/createPostComponents/validatePost/validatePricingAndTiming";

export interface CreatePostPageProps {
    setAddPost: (addPost: boolean) => void;
}

export default function CreatePostPage({ setAddPost }: CreatePostPageProps) {
    const [pricePerMonth, setPricePerMonth] = useState<string>("0");
    const [priceErrorText, setPriceErrorText] = useState<string>("");
    const [semester, setSemester] = useState<string>("");
    const [semesterErrorText, setSemesterErrorText] = useState<string>("");
    
    const validtePost = () => {
        validatePricingAndTiming({ 
            pricePerMonth, 
            semester, 
            setPriceErrorText, 
            setSemesterErrorText 
        });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white rounded-md p-8">
                <div className="w-full flex">
                    <div className="flex-1"></div>   
                    <h1 className="text-2xl font-bold justify-center">Create Post</h1>
                    <div className="flex-1"></div>
                </div>
                <div className="w-full flex">
                    <div className="flex-1"></div>
                    <PricingAndTiming 
                        pricePerMonth={pricePerMonth}
                        setPricePerMonth={setPricePerMonth} 
                        priceErrorText={priceErrorText}
                        setPriceErrorText={setPriceErrorText}
                        semester={semester}
                        setSemester={setSemester}
                        semesterErrorText={semesterErrorText}
                        setSemesterErrorText={setSemesterErrorText}
                    />
                    <div className="flex-1"></div>
                </div>
                <div className="w-full flex">
                    <div className="p-4 flex items-center w-full">
                        <div className="flex flex-1 justify-start">
                            <button 
                                className="bg-gray-200 hover:bg-gray-300 text-red-500 rtart date rounded-md p-4"
                                onClick={() => {
                                    setAddPost(false);
                                }}
                                >Cancel</button>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex flex-1 justify-end">
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white rounded-md p-4"
                                onClick={() => {
                                    validtePost();
                                }}
                            >+ Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}