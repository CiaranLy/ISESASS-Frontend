export interface ValidateBedProps {
    bed: string;
    setBedErrorText: (bedErrorText: string) => void;
}

export const validateBed = ({
    bed,
    setBedErrorText,
}: ValidateBedProps) => {
    try {
        if (bed.length === 0) {
            setBedErrorText("Bed is required");
            return false;
        }
        if (parseInt(bed) <= 0) {
            setBedErrorText("Bed must be a positive number");
            return false;
        }
    } catch (error) {
        setBedErrorText("Bed must be a number");
        return false;
    }

    return true;
}