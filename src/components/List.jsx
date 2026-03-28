import Card from "./Card";
import AddCard from "./AddCard";

function List({ list, addCardToList }) {
  return (
    <div className="bg-gray-100 p-3 rounded-xl min-w-[270px] max-h-[85vh] flex flex-col shadow-md">

      <h2 className="font-semibold text-gray-700 mb-3">
        {list.title}
      </h2>

      <div className="flex flex-col gap-2 overflow-y-auto">
        {list.cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      <AddCard onAdd={(title) => addCardToList(list.id, title)} />

    </div>
  );
}

export default List;