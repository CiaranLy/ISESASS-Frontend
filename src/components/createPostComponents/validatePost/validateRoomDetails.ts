import { validateBathroom } from "./roomDetails/validateBathroom";
import { validateBed } from "./roomDetails/validateBed";

export interface ValidateRoomDetailsProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
    bathroom: string;
    setBathroomErrorText: (bathroomErrorText: string) => void;
}

export const validateRoomDetails = ({
    bed,
    setBedErrorText,
    bathroom,
    setBathroomErrorText,
}: ValidateRoomDetailsProps) => {
    let returnValue = true;
    if (!validateBed({ bed, setBedErrorText })) {
        returnValue = false;
    }

    if (!validateBathroom({ bathroom, setBathroomErrorText })) {
        returnValue = false;
    }

    return returnValue;
}