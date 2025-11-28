export function StudentItem({ id, name, onDelete, isPresent, onToggle }: any) {
  return (
    <li
      className={`student-item ${isPresent ? "present" : ""}`}
      onClick={() => onToggle()}
    >
      <span>{id}</span>
      <span> </span>
      <span>{name}</span>
      <span> </span>
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
}
