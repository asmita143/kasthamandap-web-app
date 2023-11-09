
const Card = ({ children, onClick }) => {
  const childrenAsString = children.props.dishName;
  return (
    <div className="flex flex-wrap justify-items-center relative m-10 h-40 w-64 hover:shadow-2xl shadow-black-500/500" onClick={onClick}>
      <img 
        className="rounded-lg h-full w-full object-cover " 
        src={`./assets/images/${childrenAsString}.jpg`}>
      </img>
      <div className="absolute h-14 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 opacity-70">
            <h3 className="text-xl md:text-sm text-black font-bold">{children}</h3>
      </div>
    </div>
  )
};

export default Card;
