import { useState, } from "react";
import PricingAndTiming from "../components/createPostComponents/pricingAndTiming";
import { validatePricingAndTiming } from "../components/createPostComponents/validatePost/validatePricingAndTiming";
import RoomDetails from "../components/createPostComponents/roomDetails";
import { validateRoomDetails } from "../components/createPostComponents/validatePost/validateRoomDetails";
import AddressDetails from "../components/createPostComponents/addressDetails";
import { validateAddressDetails } from "../components/createPostComponents/validatePost/validateAddressDetails";
import { createPost } from "../CRUD/create_post";
import { User } from "../Types/User";

export interface CreatePostPageProps {
    setAddPost: (addPost: boolean) => void;
    user: User;
}

export default function CreatePostPage({ 
    setAddPost,
    user,
}: CreatePostPageProps) {
    const [postErrorText, setPostErrorText] = useState<string>("");

    const [pricePerMonth, setPricePerMonth] = useState<string>("0");
    const [priceErrorText, setPriceErrorText] = useState<string>("");
    const [semester, setSemester] = useState<string>("");
    const [semesterErrorText, setSemesterErrorText] = useState<string>("");

    const [bed, setBed] = useState<string>("");
    const [bedErrorText, setBedErrorText] = useState<string>("");
    const [bathroom, setBathroom] = useState<string>("");
    const [bathroomErrorText, setBathroomErrorText] = useState<string>("");
    const [ensuite, setEnsuite] = useState<boolean>(false);
    const [ensuiteErrorText] = useState<string>("");
    const [roommates, setRoommates] = useState<string>("0");
    const [roommatesErrorText, setRoommatesErrorText] = useState<string>("");

    const [line_1, setLine_1] = useState<string>("");
    const [line_2, setLine_2] = useState<string>("");
    const [line_2ErrorText, setLine_2ErrorText] = useState<string>("");
    const [line_3, setLine_3] = useState<string>("");
    const [line_3ErrorText, setLine_3ErrorText] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [cityErrorText, setCityErrorText] = useState<string>("");
    const [county, setCounty] = useState<string>("");
    const [countyErrorText, setCountyErrorText] = useState<string>("");
    const [postcode, setPostcode] = useState<string>("");
    const [postcodeErrorText, setPostcodeErrorText] = useState<string>("")|| null;
    const [notes, setNotes] = useState<string>("");
    
    const validtePost = () => {
        let returnValue = true;
        if (!validatePricingAndTiming({ 
            pricePerMonth, 
            semester, 
            setPriceErrorText, 
            setSemesterErrorText 
        })) {
            returnValue = false;
        }

        if (!validateRoomDetails({ 
            bed, 
            setBedErrorText, 
            bathroom, 
            setBathroomErrorText, 
            roommates, 
            setRoommatesErrorText, 
        })) {
            returnValue = false;
        }

        if (!validateAddressDetails({ 
            line_2,
            setLine_2ErrorText,
            line_3,
            setLine_3ErrorText,
            city,
            setCityErrorText,
            county,
            setCountyErrorText,
            postcode,
            setPostcodeErrorText,
            setPostcode,
        })) {
            returnValue = false;
        }

        return returnValue;
    }

    const createPostFunction = async () => {
        if(validtePost()) {
            const response = await createPost({
                posterId: user.id as number,
                price: parseInt(pricePerMonth),
                semester: semester,
                bed: bed,
                bathroom: bathroom,
                ensuite: ensuite,
                roommates: parseInt(roommates),
                notes: notes,
                line_1: line_1,
                line_2: line_2,
                line_3: line_3,
                city: city,
                county: county,
                postcode: postcode,
            });
            if(response.status === 201) {
                setPostErrorText("");
                setAddPost(false);
            } else {
                setPostErrorText("Failed to create post, please try again");
            }
        }
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
                        semester={semester}
                        setSemester={setSemester}
                        semesterErrorText={semesterErrorText}
                    />
                    <div className="flex-1"></div>
                </div>
                <div className="w-full flex">
                    <div className="flex-1"></div>
                    <RoomDetails 
                        bed={bed}
                        setBed={setBed}
                        bedErrorText={bedErrorText}
                        bathroom={bathroom}
                        setBathroom={setBathroom}
                        bathroomErrorText={bathroomErrorText}
                        ensuite={ensuite}
                        setEnsuite={setEnsuite}
                        ensuiteErrorText={ensuiteErrorText} 
                        roommates={roommates}
                        setRoommates={setRoommates}
                        roommatesErrorText={roommatesErrorText}
                    />
                    <div className="flex-1"></div>
                </div>
                <div className="w-full flex">
                    <div className="flex-1"></div>
                    <AddressDetails
                        line_1={line_1}
                        setLine_1={setLine_1}
                        line_2={line_2}
                        setLine_2={setLine_2}
                        line_2ErrorText={line_2ErrorText}
                        line_3={line_3}
                        setLine_3={setLine_3}
                        line_3ErrorText={line_3ErrorText}                        
                        city={city}
                        setCity={setCity}
                        cityErrorText={cityErrorText}
                        county={county}
                        setCounty={setCounty}
                        countyErrorText={countyErrorText}
                        postcode={postcode}
                        setPostcode={setPostcode}
                        postcodeErrorText={postcodeErrorText}
                        notes={notes}
                        setNotes={setNotes}
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
                        <div className="flex-1 justify-center items-center text-center flex bg-gray-200">
                            <p className="text-red-500">{postErrorText}</p>
                        </div>
                        <div className="flex flex-1 justify-end">
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white rounded-md p-4"
                                onClick={() => {
                                    createPostFunction();
                                }}
                            >+ Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}