export interface ValidatePostCodeProps {
    postcode: string;
    setPostcodeErrorText: (postcodeErrorText: string) => void;
    setPostcode: (postcode: string) => void;
}

export const validatePostCode = ({ 
    postcode, 
    setPostcodeErrorText, 
    setPostcode 
}: ValidatePostCodeProps) => {
    if (postcode.length === 0) {
        setPostcodeErrorText("");
        return true;
    }

    const cleanPostcode = postcode.trim().toUpperCase();
    
    // Eircode format: ABC 1234 (7 chars with space)
    const eircodePattern = /^[A-Z0-9]{3} [A-Z0-9]{4}$/;
    
    if (!eircodePattern.test(cleanPostcode)) {
        setPostcodeErrorText("Eircode must be in format ABC 1234");
        return false;
    }
    
    // Check for excluded letters
    const excludedLetters = /[BGILMOQS]/;
    if (excludedLetters.test(cleanPostcode)) {
        setPostcodeErrorText("Eircode contains invalid characters");
        return false;
    }

    if(!isNaN(Number(cleanPostcode.charAt(0)))) {
        setPostcodeErrorText("Eircode must start with a letter");
        return false;
    }

    if(isNaN(Number(cleanPostcode.charAt(1)))) {
        setPostcodeErrorText("Second character must be a letter");
        return false;
    }

    setPostcode(cleanPostcode);
    setPostcodeErrorText("");
    return true;
}