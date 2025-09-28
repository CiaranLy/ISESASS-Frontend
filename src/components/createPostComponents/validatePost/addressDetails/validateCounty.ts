import { Counties } from "../../../../Constants/Counties";

export interface ValidateCountyProps {
    county: string;
    setCountyErrorText: (countyErrorText: string) => void;
}

export const validateCounty = ({ county, setCountyErrorText }: ValidateCountyProps) => {
    if (county.length === 0) {
        setCountyErrorText("County is required");
        return false;
    }
    if (!Counties.includes(county)) {
        setCountyErrorText("County is invalid");
        return false;
    }
    setCountyErrorText("");
    return true;
}