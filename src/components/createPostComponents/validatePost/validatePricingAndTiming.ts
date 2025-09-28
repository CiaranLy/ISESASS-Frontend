import { validatePricing } from "./pricingAndTiming/pricing";
import { validateTiming } from "./pricingAndTiming/timing";

export interface ValidatePricingAndTimingProps {
    pricePerMonth: string;
    semester: string;
    setPriceErrorText: (priceErrorText: string) => void;
    setSemesterErrorText: (semesterErrorText: string) => void;
}

export const validatePricingAndTiming = ({ 
    pricePerMonth,
    semester,
    setPriceErrorText, 
    setSemesterErrorText 
}: ValidatePricingAndTimingProps) => {
    let returnValue = true;
    if (!validatePricing({ pricePerMonth, setPriceErrorText })) {
        returnValue = false;
    }

    if (!validateTiming({ semester, setSemesterErrorText })) {
        returnValue = false;
    }
    return returnValue;
}