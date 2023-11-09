import { useState } from "react";
import PopUp from "./PopUp";


const DishCard = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dishType, setDishType] = useState("");

    const handleClick = (name) => {
        // Handle the card click event here
        console.log(name);
        setDishType(name)
        setOpenPopup(true)
    };

    const HandleRemovePopUp = () => setOpenPopup(false);

    return (
        <div className="flex-col">
            <img className=" object-cover h-48 w-full" src="./assets/images/nepali-food-2.jpg" alt="Image Description"></img>
            <div className="flex flex-1 m-10  justify-center items-center">
                <div className="">
                    <button
                        onClick={() => handleClick("Alacarte")}
                        type="button"
                        className="focus:outline-none bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        AlaCarte Menu
                    </button>
                </div>
                <div className="">
                <button
                        type="button"
                        onClick={() => handleClick("Lunch")}
                        className="focus:outline-none bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Lunch Menu
                    </button>
                </div>
            </div>
            <div>
                <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} dishType={dishType}/>   
            </div>
        </div>
      
    );
};
  
  export default DishCard;