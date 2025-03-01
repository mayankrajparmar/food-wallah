import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen h-20 flex justify-between items-center text-[#545454] px-6 py-0 bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c] font-bold fixed top-0 left-0 z-[999]">
      <div>
        <Link to="/">
          <img
            className="w-20 h-20 rounded-full cursor-pointer"
            src="logo.png"
            alt="Food Wallah Logo"
          />
        </Link>
      </div>

      <div>
        <ul className="list-none flex items-center">
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-center items-center px-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px] py-2 "
              to="/"
            >
              <FaCartArrowDown />
            </Link>
          </li>
          <li>
            <button className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
