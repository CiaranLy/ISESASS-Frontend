import { validateAddressLine } from "./addressDetails/validateAddressLine";
import { validateCounty } from "./addressDetails/validateCounty";
import { validatePostCode } from "./addressDetails/validatePostCode";

export interface ValidateAddressDetailsProps {
   line_2: string;
   setLine_2ErrorText: (line_2ErrorText: string) => void;
   line_3: string;
   setLine_3ErrorText: (line_3ErrorText: string) => void;
   city: string;
   setCityErrorText: (cityErrorText: string) => void;
   county: string;
   setCountyErrorText: (countyErrorText: string) => void;
   postcode: string;
   setPostcodeErrorText: (postcodeErrorText: string) => void;
   setPostcode: (postcode: string) => void;
}

export const validateAddressDetails = ({
    line_2,
    setLine_2ErrorText,
    line_3,
    setLine_3ErrorText,
    city,
    setCityErrorText,
    county,
    setCountyErrorText,
    postcode,
    setPostcodeErrorText,
    setPostcode,
}: ValidateAddressDetailsProps) => {
    let returnValue = true;

    if (!validateAddressLine({ line: line_2, setLineErrorText: setLine_2ErrorText })) {
        returnValue = false;
    }

    if (!validateAddressLine({ line: line_3, setLineErrorText: setLine_3ErrorText })) {
        returnValue = false;
    }

    if (!validateCounty({ county, setCountyErrorText })) {
        returnValue = false;
    }

    if (!validateAddressLine({ line: city, setLineErrorText: setCityErrorText })) {
        returnValue = false;
    }

    if (!validatePostCode({ postcode, setPostcodeErrorText, setPostcode })) {
        returnValue = false;
    }


    return returnValue;
}