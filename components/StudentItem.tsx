import { memo } from "react";

export const StudentItem = memo(function StudentItem({ id, name, onDelete, isPresent, onToggle }: any) {
  return (
    <li
      className={`student-item${isPresent ? " present" : ""}`}
      onClick={() => onToggle()}
    >
      <span>{id}</span>
      <span>{name}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        Xóa
      </button>
    </li>
  );
});
