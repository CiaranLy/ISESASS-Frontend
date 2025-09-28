import { validateBed } from "./roomDetails/validateBed";

export interface ValidateRoomDetailsProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
}

export const validateRoomDetails = ({
    bed,
    setBedErrorText,
}: ValidateRoomDetailsProps) => {
    if (!validateBed({ bed, setBedErrorText })) {
        return false;
    }

    return true;
}