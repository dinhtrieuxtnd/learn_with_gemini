"use client";

import { StudentList } from "./StudentList";
import { StudentProvider } from "@/contexts/StudentContext";

export function App () {
    return (
        <StudentProvider>
            <div>
                <h1 className="title">First NextJS project of Trieu</h1>
                
                <StudentList></StudentList>
            </div>
        </StudentProvider>
    );
}