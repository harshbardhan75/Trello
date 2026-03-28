function Card({ card }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition border">
      {card.title}
    </div>
  );
}

export default Card;