function Navbar() {
  return (
    <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center shadow">

      <h1 className="text-lg font-bold">Trello Clone</h1>

      <input
        type="text"
        placeholder="Search..."
        className="bg-blue-500 px-3 py-1 rounded outline-none placeholder-gray-200"
      />

      <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
        H
      </div>

    </div>
  );
}

export default Navbar;