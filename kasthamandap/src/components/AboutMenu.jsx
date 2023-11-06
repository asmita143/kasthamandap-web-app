const AboutMenu = () => {
  return (
    <div className="mx-10 my-20">
      <div className="flex flex-col items-center">
        <span className="font-cursive absolute mt-5 text-4xl text-white ">
          All dishes includes basmati rice, naan bread and a dash of sause.
        </span>
        <span className="font-cursive absolute mt-20 text-4xl text-white shadow-2xl">
          The lunch includes a salad table, coffe, Nepali tea and Mango Lassi.
        </span>
        <span className="absolute mt-40">
          <button
            type="button"
            className="focus:outline-none bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            See Menu
          </button>
        </span>
        <div className="flex  absolute mt-60">
          <button
            type="button"
            className="font-satisfy w-25  bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Wolt
          </button>
          <button
            type="button"
            className="font-satisfy ml-20 w-25  bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Foodora
          </button>
        </div>
      </div>
      <img
        className="object-cover h-96 w-full rounded-lg"
        src="./assets/images/Nepalese.jpeg"
      ></img>
    </div>
  );
};

export default AboutMenu;
