import Button from "./ui/Button";

const Navbar = () => {
    return (
        <div className='w-full h-16 sticky top-0 bg-opacity-50 bg-white flex items-center font-josefin-sans z-50'> 

            <div className="flex-none flex ml-10 items-center justify-center text-2xl font-extrabold">
                Kasthamandap
            </div>

            <div className="flex-1">
                <ul className="flex justify-center m-0 p-0 list-none ">
                    <li className="mr-20 text-xl font-semibold cursor-pointer md:hover:text-gray-700 " data-text="About">
                        About
                    </li>
                    <li className="mr-20 text-xl font-semibold cursor-pointer md:hover:text-gray-700" data-text="Menu">
                        Menu
                    </li>
                    <li className="mr-20 text-xl font-semibold cursor-pointer md:hover:text-gray-700" data-text="A La Carte">
                        A La Carte
                    </li>
                    <li className="mr-20 text-xl font-semibold cursor-pointer md:hover:text-gray-700" data-text="Contact">
                        Contact
                    </li>
                </ul>
            </div>

            <div className="flex-none mr-10 flex items-center justify-center">
                <Button size="large">Book Table</Button>
            </div>
            
        </div>
    )
}

export default Navbar;