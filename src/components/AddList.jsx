import { useState } from "react";

function AddList({ onAdd }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
    setShow(false);
  };

  return (
    <div className="min-w-[270] shrink-0">
      {show ? (
        <div className="bg-gray-100 p-3 rounded-xl">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded mb-2"
            placeholder="List title..."
          />

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add List
            </button>
            <button onClick={() => setShow(false)}>✕</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="bg-white/30 text-white p-3 rounded-xl text-left w-[270px]"
        >
          + Add another list
        </button>
      )}
    </div>
  );
}

export default AddList;