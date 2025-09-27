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
    if (!validatePricing(pricePerMonth, setPriceErrorText)) {
        return false;
    }

    if (!validateTiming(semester, setSemesterErrorText)) {
        return false;
    }
    return true;
}