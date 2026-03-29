// // List.jsx
// import React, { useState } from "react";

// export default function List({ list, addCard }) {
//   const [showCardInput, setShowCardInput] = useState(false);
//   const [cardTitle, setCardTitle] = useState("");

//   const handleAddCard = () => {
//     if (!cardTitle.trim()) return;
//     addCard(list.id, cardTitle);
//     setCardTitle("");
//     setShowCardInput(false);
//   };

//   return (
//     <div
//       className="flex-shrink-0 w-72 p-3 rounded-lg shadow flex flex-col max-h-[80vh]"
//       style={{ backgroundColor: list.color }} // ✅ dynamic color
//     >
//       {/* List Header */}
//       <div className="flex justify-between items-center mb-3">
//         <h3 className="font-bold text-gray-900">{list.title}</h3>
//         <button className="text-gray-500 hover:text-gray-700">&bull;&bull;&bull;</button>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-col gap-2 overflow-y-auto">
//         {list.cards.map((card) => (
//           <div
//             key={card.id}
//             className="bg-white rounded p-2 shadow hover:shadow-md cursor-pointer transition text-sm"
//           >
//             {card.title}
//           </div>
//         ))}
//       </div>

//       {/* Add Card */}
//       <div className="mt-3">
//         {showCardInput ? (
//           <div className="flex flex-col gap-2">
//             <input
//               type="text"
//               value={cardTitle}
//               onChange={(e) => setCardTitle(e.target.value)}
//               placeholder="Card title"
//               className="px-2 py-1 rounded border focus:outline-none focus:ring focus:ring-blue-200"
//             />
//             <div className="flex gap-2">
//               <button
//                 onClick={handleAddCard}
//                 className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//               >
//                 Add Card
//               </button>
//               <button
//                 onClick={() => setShowCardInput(false)}
//                 className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ) : (
//           <button
//             className="text-left text-sm text-gray-600 hover:text-gray-800 mt-2"
//             onClick={() => setShowCardInput(true)}
//           >
//             + Add a card
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

import Card from "./Card";
import AddCard from "./AddCard";

function List({ list, addCard }) {
  return (
    <div className="bg-gray-100 p-3 rounded-xl min-w-[270] flex-shrink-0 shadow-md">

      <h2 className="font-semibold mb-2 text-gray-800">
        {list?.title || "No Title"}
      </h2>

      <div className="flex flex-col gap-2">
        {(list.cards || []).filter(Boolean).map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      <AddCard onAdd={(title) => addCard(list.id, title)} />

    </div>
  );
}

export default List;