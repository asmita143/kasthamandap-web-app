import { useState } from "react";
import DisplayMenu from "../MenuItems";
import MenuCard from "./MenuCard";
import PopUp from "./PopUp";


const DishCard = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dishName, setDishName] = useState("");

    const handleCardClick = (name) => {
        // Handle the card click event here
        setOpenPopup(true)
        setDishName(name)
        console.log(name);
    };

    const HandleRemovePopUp = () => setOpenPopup(false);

    return (
        <div className="flex-col">
            <img className=" object-cover h-48 w-full" src="./assets/images/nepali-food-2.jpg" alt="Image Description"></img>
            <div className="flex flex-wrap">
                <MenuCard name="Starters" onClick={() => handleCardClick("Starters")} />
                <MenuCard name="Vegetarian" onClick={() => handleCardClick("Vegetarian Dishes")}/>
                <MenuCard name="Lamb" onClick={() => handleCardClick("Lamb Dishes")}/>
                <MenuCard name="Chicken" onClick={() => handleCardClick("Chicken Dishes")}/>
                <MenuCard name="Tandoor" onClick={() => handleCardClick("Tandoor Dishes")}/>
                <MenuCard name="Drinks" onClick={() => handleCardClick("Drinks")}/>
            </div>
            <div>
                <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} dishName={dishName} />
            </div>
        </div>
      
    );
};
  
  export default DishCard;