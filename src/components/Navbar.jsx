import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between px-[1rem] py-[1.5rem] relative">
      <a href="/">
        <img src="images/logo.svg" alt="logo" />
      </a>

      <ul
        className={`fixed sm:bg-none bg-app-neutral-very-dark-violet flex flex-col gap-[2rem] px-[2rem] pt-[2rem] sm:pt-0 sm:px-0 justify-start text-app-neutral-gray w-[100%] h-[100vh] sm:h-auto  left-0 top-[80px] sm:bg-white sm:text-app-neutral-dark-grayish-violet sm:static sm:flex-row  sm:items-center sm:justify-end uppercase sm:gap-[1rem] ${
          isOpen ? "scale-1 opacity-1 transition-all" : "scale-0 opacity-0"
        } bg-nav-pattern bg-no-repeat bg-right-bottom sm:scale-1 sm:opacity-1 z-1`}
      >
        <li className="hover:text-app-neutral-very-dark-violet">
          <a href="#">How we work</a>
        </li>
        <li className="hover:text-app-neutral-very-dark-violet">
          <a href="#">Blog</a>
        </li>
        <li className="hover:text-app-neutral-very-dark-violet">
          <a href="#">Account</a>
        </li>
        <li className=" button sm:border-app-neutral-very-dark-violet sm:text-black font-[500] sm:hover:bg-app-neutral-very-dark-violet sm:hover:text-white transition-colors">
          <a href="#">View plans</a>
        </li>
      </ul>

      <button className="sm:hidden" onClick={handleToggleMenu}>
        {isOpen ? (
          <img src="images/icon-close.svg" alt="menu bar button" />
        ) : (
          <img src="images/icon-hamburger.svg" alt="menu bar button" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
