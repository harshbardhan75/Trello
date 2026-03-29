function Card({ card }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow border border-transparent hover:border-black hover:shadow-md transition text-[15px] w-50 h-12 flex items-center justify-start gap-4">
      
      {/* Circle on left-most side */}
      <div className="w-5 h-5 rounded-full bg-gray-500 shrink-0"></div>

      {/* Card text */}
      <span className="text-gray-800 font-medium">{card.title}</span>
    </div>
  );
}

export default Card;