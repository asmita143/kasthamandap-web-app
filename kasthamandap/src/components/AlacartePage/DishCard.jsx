import MenuCard from "../MenuCard";

const DishCard = () => {
    return (
        <div className="flex-col">
            <img className=" object-cover h-48 w-full" src="./assets/images/nepali-food-2.jpg" alt="Image Description"></img>
            <div className="flex flex-wrap">
                <MenuCard name="Staters" />
                <MenuCard name="Vegetarian Dishes"/>
                <MenuCard name="Lamb Dishes"/>
            </div>
        </div>
      
    );
}
  
  export default DishCard;