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
    if (bed !== "single" && bed !== "double") {
        setBedErrorText("Bed must be either single or double");
        return false;
    }
    setBedErrorText("");
    return true;
}