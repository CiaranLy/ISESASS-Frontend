import { validateBathroom } from "./roomDetails/validateBathroom";
import { validateBed } from "./roomDetails/validateBed";
import { validateRoommates } from "./roomDetails/validateRoomates";

export interface ValidateRoomDetailsProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
    bathroom: string;
    setBathroomErrorText: (bathroomErrorText: string) => void;
    roommates: string;
    setRoommatesErrorText: (roommatesErrorText: string) => void;
}

export const validateRoomDetails = ({
    bed,
    setBedErrorText,
    bathroom,
    setBathroomErrorText,
    roommates,
    setRoommatesErrorText,
}: ValidateRoomDetailsProps) => {
    let returnValue = true;
    if (!validateBed({ bed, setBedErrorText })) {
        returnValue = false;
    }

    if (!validateBathroom({ bathroom, setBathroomErrorText })) {
        returnValue = false;
    }

    if (!validateRoommates({ roommates, setRoommatesErrorText })) {
        returnValue = false;
    }

    return returnValue;
}