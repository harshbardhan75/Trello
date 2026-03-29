import { useState } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      name: "My Trello Board",
      lists: [
        {
          id: 1,
          title: "Todo",
          cards: [
            { id: 1, title: "Sample Task 1" },
            { id: 2, title: "Sample Task 2" },
             { id: 3, title: "Sample Task 3" },
            { id: 4, title: "Sample Task 4" },

          ]
        }
      ]
    }
  ]);

  const [activeBoardId, setActiveBoardId] = useState(1);
  const [search, setSearch] = useState("");

  const activeBoard = boards.find(b => b.id === activeBoardId);

  const addList = (title) => {
    setBoards(prev =>
      prev.map(board =>
        board.id === activeBoardId
          ? {
              ...board,
              lists: [...board.lists, { id: Date.now(), title, cards: [] }]
            }
          : board
      )
    );
  };

  const addCard = (listId, title) => {
    setBoards(prev =>
      prev.map(board =>
        board.id === activeBoardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.id === listId
                  ? {
                      ...list,
                      cards: [...list.cards, { id: Date.now(), title }]
                    }
                  : list
              )
            }
          : board
      )
    );
  };

  return (
    <>
      <Navbar
        boards={boards}
        setActiveBoardId={setActiveBoardId}
        setSearch={setSearch}
      />

      <Board
        board={activeBoard}
        addList={addList}
        addCard={addCard}
        search={search}
      />
    </>
  );
}

export default App;