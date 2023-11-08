import { useState } from "react";
import DisplayMenu from "../MenuItems";
import MenuCard from "./MenuCard";

const DishCard = () => {
    const [isShown, setIsShown] = useState(false);
    const [dishName, setDishName] = useState("");

    const handleCardClick = (name) => {
        // Handle the card click event here
        setIsShown(current => !current)
        setDishName(name)
        console.log(name);
      };

    return (
        <div className="flex-col">
            <img className=" object-cover h-48 w-full" src="./assets/images/nepali-food-2.jpg" alt="Image Description"></img>
            <div className="flex flex-wrap">
                <MenuCard name="Starters" onClick={() => handleCardClick("Starters")} />
                <MenuCard name="Vegetarian Dishes" onClick={() => handleCardClick("Vegetarian Dishes")}/>
                <MenuCard name="Lamb Dishes" onClick={() => handleCardClick("Lamb Dishes")}/>
                <MenuCard name="Chicken Dishes" onClick={() => handleCardClick("Chicken Dishes")}/>
                <MenuCard name="Tandoor Dishes" onClick={() => handleCardClick("Tandoor Dishes")}/>
                <MenuCard name="Drinks" onClick={() => handleCardClick("Drinks")}/>
            </div>
            <div>
                {isShown && (
                    <DisplayMenu name={dishName} />
                )}
            </div>
        </div>
      
    );
};
  
  export default DishCard;