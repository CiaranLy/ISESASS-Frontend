export interface ValidateTimingProps {
    semester: string;
    setSemesterErrorText: (semesterErrorText: string) => void;
}

export const validateTiming = ({
    semester,
    setSemesterErrorText,
}: ValidateTimingProps) => {
    if (semester === "Autumn" || semester === "Spring" || semester === "Summer") {
        setSemesterErrorText("");
        return true;
    }
    setSemesterErrorText("Semester is required");
    return false;
}