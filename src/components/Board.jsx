import { useState } from "react";
import List from "./List";
import AddList from "./AddList";

function Board() {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Todo",
      cards: [
        { id: 1, title: "Sample Task 1" },
        { id: 2, title: "Sample Task 2" }
      ]
    }
  ]);

  const addCardToList = (listId, title) => {
    setLists(prev =>
      prev.map(list =>
        list.id === listId
          ? {
              ...list,
              cards: [...list.cards, { id: Date.now(), title }]
            }
          : list
      )
    );
  };

  const addList = (title) => {
    setLists(prev => [
      ...prev,
      { id: Date.now(), title, cards: [] }
    ]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-[calc(100vh-60px)] p-4 overflow-x-auto">
      <div className="flex gap-4 items-start">

        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            addCardToList={addCardToList}
          />
        ))}

        <AddList onAdd={addList} />

      </div>
    </div>
  );
}

export default Board;