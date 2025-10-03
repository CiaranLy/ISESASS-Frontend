import { useState, } from "react";
import PricingAndTiming from "../components/createPostComponents/pricingAndTiming";
import { validatePricingAndTiming } from "../components/createPostComponents/validatePost/validatePricingAndTiming";
import RoomDetails from "../components/createPostComponents/roomDetails";
import { validateRoomDetails } from "../components/createPostComponents/validatePost/validateRoomDetails";
import AddressDetails from "../components/createPostComponents/addressDetails";
import { validateAddressDetails } from "../components/createPostComponents/validatePost/validateAddressDetails";
import { User } from "../Types/User";
import { Post } from "../Types/Post";
import { updatePost } from "../CRUD/update_posts";

export interface UpdatePostPageProps {
    setUpdatePost: (updatePost: Post | null) => void;
    user: User;
    post: Post;
}

export default function UpdatePostPage({ 
    setUpdatePost,
    user,
    post,
}: UpdatePostPageProps) {
    const [postErrorText, setPostErrorText] = useState<string>("");

    const [pricePerMonth, setPricePerMonth] = useState<string>(post.price!.toString());
    const [priceErrorText, setPriceErrorText] = useState<string>("");
    const [semester, setSemester] = useState<string>(post.semester!);
    const [semesterErrorText, setSemesterErrorText] = useState<string>("");

    const [bed, setBed] = useState<string>(post.bed!.toString());
    const [bedErrorText, setBedErrorText] = useState<string>("");
    const [bathroom, setBathroom] = useState<string>(post.bathroom!.toString());
    const [bathroomErrorText, setBathroomErrorText] = useState<string>("");
    const [ensuite, setEnsuite] = useState<boolean>(post.ensuite!);
    const [ensuiteErrorText] = useState<string>("");
    const [roommates, setRoommates] = useState<string>(post.roommates!.toString());
    const [roommatesErrorText, setRoommatesErrorText] = useState<string>("");

    const [line_1, setLine_1] = useState<string>(post.location.line_1!);
    const [line_2, setLine_2] = useState<string>(post.location.line_2!);
    const [line_2ErrorText, setLine_2ErrorText] = useState<string>("");
    const [line_3, setLine_3] = useState<string>(post.location.line_3!);
    const [line_3ErrorText, setLine_3ErrorText] = useState<string>("");
    const [city, setCity] = useState<string>(post.location.city!);
    const [cityErrorText, setCityErrorText] = useState<string>("");
    const [county, setCounty] = useState<string>(post.location.county!);
    const [countyErrorText, setCountyErrorText] = useState<string>("");
    const [postcode, setPostcode] = useState<string>(post.location.eircode!);
    const [postcodeErrorText, setPostcodeErrorText] = useState<string>("");
    const [notes, setNotes] = useState<string>(post.notes!);
    
    const validatePost = () => {
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

    const updatePostFunction = async () => {
        if(validatePost()) {                                                                                                    
            const response = await updatePost({ 
                id: post.id!,
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
                eircode: postcode,
            });
            if(response === 200 || response === 201) {
                setPostErrorText("");
                setUpdatePost(null);
            } else {
                setPostErrorText("Failed to update post, please try again");
            }
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white rounded-md p-8">
                <div className="w-full flex">
                    <div className="flex-1"></div>   
                    <h1 className="text-2xl font-bold justify-center">Update Post</h1>
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
                                    setUpdatePost(null);
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
                                    updatePostFunction();
                                }}
                            >Update Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}