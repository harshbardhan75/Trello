import { useState } from "react";
import { FaSearch, FaHome, FaBell, FaPlus, FaUserCircle } from "react-icons/fa";
import { SiTrello } from "react-icons/si";

function Navbar({ boards, setActiveBoardId, addBoard }) {
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  // Filter boards based on search input
  const filteredBoards = boards.filter(board =>
    board.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!name.trim()) return;
    const newBoardId = addBoard(name);
    setName("");
    setShowCreate(false);
    setActiveBoardId(newBoardId);
  };

  return (
    <div className="bg-gray-700 text-white px-4 py-2 flex items-center justify-between flex-wrap gap-4">

      {/* Left Icons */}
      <div className="flex items-center gap-4">
        <SiTrello className="text-white text-2xl cursor-pointer  hover:text-gray-300" />
        <FaHome className="text-white text-xl cursor-pointer hover:text-gray-300" />
      </div>

      {/* Centered Search */}
      <div className="relative flex-1 max-w-md mx-auto">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search board..."
          className="pl-10 pr-2 py-1 rounded text-white w-full"
        />
        {search && filteredBoards.length > 0 && (
          <div className="absolute bg-white text-white mt-1 rounded shadow w-full max-h-48 overflow-y-auto z-10">
            {filteredBoards.map(board => (
              <div
                key={board.id}
                onClick={() => {
                  setActiveBoardId(board.id);
                  setSearch(""); // clear search after selection
                }}
                className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
              >
                {board.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Create Board Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCreate(prev => !prev)}
            className="bg-purple-500 px-3 py-1 rounded flex items-center gap-1 hover:bg-purple-600"
          >
            <FaPlus /> Create
          </button>
          {showCreate && (
            <div className="absolute top-10 right-0 bg-white text-black p-2 rounded shadow flex gap-2 z-20 min-w-[200px]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Board name..."
                className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <button
                onClick={handleAdd}
                className="bg-green-500 px-2 py-1 rounded text-white"
              >
                Add
              </button>
              <button
                onClick={() => setShowCreate(false)}
                className="px-2 py-1 rounded hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <FaBell className="text-white text-xl cursor-pointer hover:text-gray-300" />

        {/* Profile */}
        <FaUserCircle className="text-white text-2xl cursor-pointer hover:text-gray-300" />
      </div>

    </div>
  );
}

export default Navbar;

// Navbar.jsx
// function Navbar({ boards, setActiveBoardId, setSearch }) {
//   return (
//     <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">

//       {/* Board Switch */}
//       <select
//         onChange={(e) => setActiveBoardId(Number(e.target.value))}
//         className="text-black px-2 py-1 rounded"
//       >
//         {boards.map(board => (
//           <option key={board.id} value={board.id}>
//             {board.name}
//           </option>
//         ))}
//       </select>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search cards..."
//         onChange={(e) => setSearch(e.target.value)}
//         className="px-3 py-1 rounded text-black"
//       />

//     </div>
//   );
// }

// export default Navbar;
