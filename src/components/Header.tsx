import { FaMoon, FaSun } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";

function Header() {
  return (
    <header className="container flex justify-between py-6 font-gemunu">
      <div className="flex justify-center items-center text-2xl ">
        <PiDotsNineBold className="cursor-pointer" />
        <span className="font-thin ml-3 mr-4">|</span>
        <h1 className="font-semibold tracking-widest">Dashboard</h1>
      </div>

      <div className="text-lg cursor-pointer">
        <FaMoon className="hidden" />
        <FaSun />
      </div>
    </header>
  );
}

export default Header;
