
const CardHeader = ({ dish, price }) => {
  return (
    <div className="flex justify-between">
      <div><h2 className="basis-1/2 text-md  font-semibold ml-3">{dish}</h2></div>
      <div><h2 className="basis-1/2 text-md font-semibold mr-3">{price}</h2></div>
    </div>
  );
};

export default CardHeader;
