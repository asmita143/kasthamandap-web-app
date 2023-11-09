import Button from "./ui/Button";

const NavBarItem = ({ item, href }) => (
  <li className="mr-20 text-xl font-semibold cursor-pointer md:hover:text-gray-700">
    <a href={href}>{item}</a>
  </li>
);

const Navbar = () => {
  return (
    <div className="w-full h-16 sticky top-0 bg-orange-200 flex items-center font-josefin-sans z-50 shadow-md">
      <div className="flex-none flex ml-10 items-center justify-center text-2xl font-extrabold">
        Kasthamandap
      </div>

      <div className="flex-1">
        <ul className="flex justify-center m-0 p-0 list-none ">
          <NavBarItem href="/" item="About" />
          <NavBarItem href="/" item="Lunch menu" />
          <NavBarItem href="/aLaCarteMenu" item="A La Carte" />
          <NavBarItem item="Contact" />
        </ul>
      </div>

      <div className="flex-none mr-10 flex items-center justify-center drop-shadow-md">
        <Button size="large">Book Table</Button>
      </div>
    </div>
  );
};

export default Navbar;
