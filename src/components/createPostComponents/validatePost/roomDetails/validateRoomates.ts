export interface ValidateRoommatesProps {
    roommates: string;
    setRoommatesErrorText: (roommatesErrorText: string) => void;
}

export const validateRoommates = ({
    roommates,
    setRoommatesErrorText,
}: ValidateRoommatesProps) => {
    try {
        const roommatesNumber = parseInt(roommates);
        if (roommatesNumber === 0) {
            setRoommatesErrorText("Number of roommates is required");
            return false;
        }
        if (roommatesNumber >= 0) {
            setRoommatesErrorText("Roommates must be a positive number");
            return false;
        }
    } catch (error) {
        setRoommatesErrorText("Roommates must be a number");
        return false;
    }
    setRoommatesErrorText("");
    return true;
}