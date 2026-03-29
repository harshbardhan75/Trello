import List from "./List";
import AddList from "./AddList";

const LIST_COLORS = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

function Board({ board, addList, addCard, search }) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-[calc(100vh-60px)] p-4 overflow-x-auto">

      <div className="flex gap-4 items-start flex-nowrap">

        {board.lists.map(list => (
          <List
            key={list.id}
            list={{
              ...list,
              cards: list.cards.filter(card =>
                card.title.toLowerCase().includes(search.toLowerCase())
              )
            }}
            addCard={addCard}
          />
        ))}

        <AddList onAdd={addList} />

      </div>

    </div>
  );
}

export default Board;