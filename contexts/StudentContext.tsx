import { createContext, useCallback, ReactNode, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Student } from '@/types/student';
import { StudentContextType } from '@/types/studentContext';

export const StudentContext = createContext<StudentContextType | null>(null);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useLocalStorage<Student[]>("students", [
    { id: 1, name: "Lan", isPresent: true },
    { id: 2, name: "Hùng", isPresent: false },
    { id: 3, name: "Mai", isPresent: true },
  ]);

  const addStudent = useCallback(
    (name: string) => {
      if (!name.trim()) return;
      setStudents((previos) => [
        ...previos,
        { id: Date.now(), name, isPresent: false },
      ]);
    },
    [setStudents]
  );

  const removeStudent = useCallback(
    (id: number) => {
      setStudents((previos) => {
        return previos.filter((student) => student.id !== id);
      });
    },
    [setStudents]
  );

  const toggleStudent = useCallback(
    (id: number) => {
      setStudents((previos) => {
        return previos.map((student) => {
          if (student.id === id) {
            return { ...student, isPresent: !student.isPresent };
          }
          return student;
        });
      });
    },
    [setStudents]
  );

  const presentStudents = useMemo(
    () => students.filter((student: Student) => student.isPresent),
    [students]
  );

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        removeStudent,
        toggleStudent,
        presentStudents
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}