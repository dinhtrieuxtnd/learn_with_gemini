import { Student } from "./student";

export type StudentContextType = {
    students: Student[];
    addStudent: (name: string) => void;
    removeStudent: (id: number) => void;
    toggleStudent: (id: number) => void;
    presentStudents: Student[];
}