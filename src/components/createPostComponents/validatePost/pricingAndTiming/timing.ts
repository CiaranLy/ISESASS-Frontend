export const validateTiming = (semester: string, setSemesterErrorText: (semesterErrorText: string) => void) => {
    if (semester === "Autumn" || semester === "Spring" || semester === "Summer") {
        setSemesterErrorText("");
        return true;
    }
    setSemesterErrorText("Semester is required");
    return false;
}