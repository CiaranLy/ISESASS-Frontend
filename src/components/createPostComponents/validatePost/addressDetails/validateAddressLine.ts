export interface ValidateAddressLineProps {
    line: string;
    setLineErrorText: (lineErrorText: string) => void;
}

export const validateAddressLine = ({ 
    line, 
    setLineErrorText 
}: ValidateAddressLineProps) => {
    if (line.length === 0) {
        setLineErrorText("Address line is required");
        return false;
    }
    setLineErrorText("");
    return true;
}