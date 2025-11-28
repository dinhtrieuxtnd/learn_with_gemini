"use client";

import { useEffect, useState } from "react";
import { StudentItem } from "./StudentItem";

export function StudentList() {
  const [students, setStudents] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedStudents = localStorage.getItem("students");
      if (storedStudents) {
        return JSON.parse(storedStudents);
      }
    }
    return [
      { id: 1, name: "Lan", isPresent: true },
      { id: 2, name: "Hùng", isPresent: false },
      { id: 3, name: "Mai", isPresent: true },
    ];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const [name, setName] = useState("");

  const handleAddStudent = () => {
    if (!name.trim()) return;
    setStudents([...students, { id: Date.now(), name, isPresent: false }]);
    setName("");
  };

  const handleRemoveStudent = (id: number) => {
    const newStudents = students.filter((student: any) => student.id !== id);
    setStudents(newStudents);
  };

  const handleToggleStudent = (id: number) => {
    const newStudents = students.map((student: any) => {
      if (student.id === id) {
        return { ...student, isPresent: !student.isPresent };
      }
      return student;
    });
    setStudents(newStudents);
  };

  return (
    <div>
      <ul>
        {students.map((student: any) => (
          <StudentItem
            key={student.id}
            id={student.id}
            name={student.name}
            isPresent={student.isPresent}
            onToggle={() => handleToggleStudent(student.id)}
            onDelete={() => handleRemoveStudent(student.id)}
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
