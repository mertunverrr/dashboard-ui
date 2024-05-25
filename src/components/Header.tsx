import { PiDotsNineBold } from "react-icons/pi";

function Header() {
  return (
    <header className="container flex justify-between py-4 font-gemunu text-darkPurpleColor">
      <div className="flex justify-center items-center text-2xl ">
        <PiDotsNineBold className="cursor-pointer " />
        <span className="font-thin ml-3 mr-4">|</span>
        <h1 className="font-semibold tracking-widest text-transparent bg-gradient-to-r bg-clip-text from-darkPurpleColor to-violet-300 cursor-default">
          Dashboard
        </h1>
      </div>
    </header>
  );
}

export default Header;
