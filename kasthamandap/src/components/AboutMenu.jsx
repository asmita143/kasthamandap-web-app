const AboutMenu = () => {
  return (
    <div className="mx-5 sm:mx-10 my-10 sm:my-20 relative">
      <img
        className="object-cover h-60 sm:h-96 w-full rounded-lg"
        src="./assets/images/Nepalese.jpeg"
        alt="Nepalese Food"
      ></img>
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center flex-col bg-gray-900 bg-opacity-75 py-5 h-60 sm:h-96">
        <div className="flex flex-col items-center">
          <span className="font-cursive  md:text-xl sm:text-base text-white">
            All dishes include basmati rice, naan bread, and a dash of sauce.
          </span>
          <span className="font-cursive md:text-xl sm:text-base text-white shadow-2xl mt-5 sm:mt-10">
            The lunch includes a salad table, coffee, Nepali tea, and Mango
            Lassi.
          </span>
          <span className="mt-5 sm:mt-10">
            <button
              type="button"
              className="focus:outline-none bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm sm:text-xl px-3 sm:px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              See Menu
            </button>
          </span>
          <div className="flex  mt-5 sm:flex-row sm:mt-10">
            <button
              type="button"
              className="font-satisfy w-20 sm:w-25 bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-xl px-3 sm:px-5 py-2 mb-2 sm:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Wolt
            </button>
            <button
              type="button"
              className="font-satisfy w-20 sm:w-25 bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-xl px-3 sm:px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Foodora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
