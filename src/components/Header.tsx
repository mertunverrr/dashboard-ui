import { useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";

function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <header className="container flex justify-between py-4 font-gemunu text-darkPurpleColor">
      <div className="flex justify-center items-center text-3xl ">
        <PiDotsNineBold
          className="cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        />
        <span className="font-thin ml-3 mr-4">|</span>
        <h1 className="font-semibold tracking-widest text-transparent bg-gradient-to-r bg-clip-text from-darkPurpleColor to-blue-300 cursor-default">
          Dashboard
        </h1>
      </div>
      {show && (
        <div className="fixed lg:hidden bottom-0 left-0  w-full z-50 bg-darkPurpleColor pl-6 py-4">
          <ul className="text-white text-sm grid grid-cols-3 gap-y-2">
            <li className="cursor-pointer">
              <a href="#activity">
                <i className="uil uil-schedule mr-1"></i>Activity Hours
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#leaderboard">
                <i className="uil uil-medal mr-1"></i>Leaderboard
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#skills">
                {" "}
                <i className="uil uil-arrow mr-1"></i>Skills
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#teams">
                <i className="uil uil-users-alt mr-1"></i>Teams
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#courses">
                {" "}
                <i className="uil uil-books mr-1"></i>Courses
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
