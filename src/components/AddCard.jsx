import { useState } from "react";

function AddCard({ onAdd }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    setShow(false);
  };

  return (
    <div className="mt-2">
      {show ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 rounded mb-2"
            placeholder="Enter card..."
          />

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
            <button onClick={() => setShow(false)}>✕</button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="text-gray-600 hover:bg-gray-200 p-2 rounded w-full text-left"
        >
          + Add a card
        </button>
      )}
    </div>
  );
}

export default AddCard;