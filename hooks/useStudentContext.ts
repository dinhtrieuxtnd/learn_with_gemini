import { StudentContext } from "@/contexts/StudentContext";
import { useContext } from "react";

export function useStudentContext() {
    const context = useContext(StudentContext);
    if (!context) {
        throw new Error("useStudentContext must be used within StudentProvider");
    }
    return context;
}