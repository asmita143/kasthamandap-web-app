import React from 'react'
import DisplayMenu from '../MenuItems';

const PopUp = ({ openPopUp, closePopUp, dishName }) => {

  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-40 backdrop-blur-sm'>
      <div 
        className='p-2 bg-white h-4/5 w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-1 overflow-y-auto'>
        <div
          className='w-full flex justify-center items-center'>
          <DisplayMenu name={dishName} />
        </div>
      </div>
    </div>
  )
}

export default PopUp