import { validateBed } from "./roomDetails/validateBed";

export interface ValidateRoomDetailsProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
}

export const validateRoomDetails = ({
    bed,
    setBedErrorText,
}: ValidateRoomDetailsProps) => {
    let returnValue = true;
    if (!validateBed({ bed, setBedErrorText })) {
        returnValue = false;
    }

    return returnValue;
}