export const validatePricing = (pricePerMonth: string, setPriceErrorText: (priceErrorText: string) => void) => {
    try {
        if (parseInt(pricePerMonth) === 0) {
            setPriceErrorText("Price per month is required");
            return false;
        }
        if (parseInt(pricePerMonth) < 0) {
            setPriceErrorText("Price per month must be a positive number");
            return false;
        }
    } catch (error) {
        setPriceErrorText("Price per month must be a number");
        return false;
    }
    setPriceErrorText("");
    return true;
}