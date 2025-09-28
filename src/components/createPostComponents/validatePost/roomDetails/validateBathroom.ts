export interface ValidateBathroomProps {
    bathroom: string;
    setBathroomErrorText: (bathroomErrorText: string) => void;
}

export const validateBathroom = ({
    bathroom,
    setBathroomErrorText,
}: ValidateBathroomProps) => {
    if (bathroom === "Shared" || bathroom === "Personal") {
        setBathroomErrorText("");
        return true;
    }
    setBathroomErrorText("Must choose a bathroom type");
    return false;
}