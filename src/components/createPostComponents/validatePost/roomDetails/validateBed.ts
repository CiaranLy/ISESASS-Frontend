export interface ValidateBedProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
}

export const validateBed = ({
    bed,
    setBedErrorText,
}: ValidateBedProps) => {
    if (bed === "") {
        setBedErrorText("Bed is required");
        return false;
    }
    setBedErrorText("");
    return true;
}