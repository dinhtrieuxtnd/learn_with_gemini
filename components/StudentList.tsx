"use client";

import { useMemo, useState } from "react";
import { StudentItem } from "./StudentItem";
import { Student } from "@/types/student";
import { useStudentContext } from "@/hooks/useStudentContext";

export function StudentList() {
  const [name, setName] = useState("");
  const context = useStudentContext();

  const { students, addStudent, removeStudent, toggleStudent } = context;

  const handleAddStudent = () => {
    addStudent(name);
    setName("");
  };

  return (
    <div>
      <ul>
        {students.map((student: Student) => (
          <StudentItem
            key={student.id}
            id={student.id}
            name={student.name}
            isPresent={student.isPresent}
            onToggle={() => toggleStudent(student.id)}
            onDelete={() => removeStudent(student.id)}
          />
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Thêm</button>
    </div>
  );
}
