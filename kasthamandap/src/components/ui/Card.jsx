
const Card = ({ children, onClick }) => {
  const childrenAsString = children.props.dishName;
  return (
    <a href="#" className="group flex-1 flex-wrap relative basis-1/4 m-10 h-80 max-w-lg hover:shadow-2xl shadow-black-500/500" onClick={onClick}>
      <img 
        className="rounded-lg h-80 w-full object-cover " 
        src={`./assets/images/${childrenAsString}.jpg`}>
      </img>
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-200 opacity-70">
            <h3 className="text-xl text-black font-bold">{children}</h3>
      </div>
    </a>
  )
};

export default Card;
