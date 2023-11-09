import React from 'react'
import { useState } from 'react';
import DisplayMenu from '../MenuItems';

const PopUp = ({ openPopUp, closePopUp, dishType}) => {
    const[showMenu, setShowMenu] = useState(true);
    const [dishName, setDishName] = useState("");

  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  const handleCardClick = (name) => {
    // Handle the card click event here
    setShowMenu(true)
    setDishName(name)
  };

  const Category = ({item}) => {
      return(
        <div className="">
            <button
                onClick={() => handleCardClick(item)}
                type="button"
                className="font-medium rounded-lg text-xl px-4 py-1 outline outline-offset-2 outline-blue-500"
            >
                {item}
            </button>
        </div>
      )
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-40 backdrop-blur-sm'>
      <div 
        className='p-2 bg-white h-4/5 w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-1 overflow-y-auto'>
        {dishType === "Alacarte" && (
            <div className=' flex-col'>
                <div className="flex flex-wrap m-5 gap-3 justify-center items-center">
                    <Category item="Starters" />
                    <Category item="Vegetarian Dishes" />
                    <Category item="Lamb Dishes" />
                    <Category item="Chicken Dishes" />
                    <Category item="Tandoor Dishes" />
                </div>
                {showMenu && (
                    <DisplayMenu name={dishName} />
                )}
            </div>
        )}

        {dishType === "Lunch" && (
            <div className=' flex-col'>
                <div className="flex flex-wrap m-5 gap-3 justify-center items-center">
                    <Category item="Sunday" />
                    <Category item="Monday" />
                    <Category item="Tuesday" />
                    <Category item="Wednesday" />
                    <Category item="Thursday" />
                </div>
                {showMenu && (
                    <DisplayMenu name={dishName} />
                )}
            </div>
        )}
      </div>
    </div>
  )
}

export default PopUp