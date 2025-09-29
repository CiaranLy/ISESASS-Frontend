export interface ValidateTimingProps {
    semester: string;
    setSemesterErrorText: (semesterErrorText: string) => void;
}

export const validateTiming = ({
    semester,
    setSemesterErrorText,
}: ValidateTimingProps) => {
    if (semester === "autumn" || semester === "spring" || semester === "summer") {
        setSemesterErrorText("");
        return true;
    }
    setSemesterErrorText("Semester is required");
    return false;
}