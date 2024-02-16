function Footer() {
  return (
    <footer className="bg-app-neutral-gray bg-footer-pattern-mobile sm:bg-footer-pattern-desktop footer-bg py-[5rem] px-[2rem]  lg:px-[5rem]">
      <div className=" flex flex-col items-center gap-[2rem] pb-[2rem] border-solid border-b-app-neutral-dark-grayish-violet border-b-[1px] border-opacity-[0.4] sm:flex-row sm:justify-between">
        <img src="images/logo.svg" alt="" />

        <ul className="flex gap-[1rem] sm:flex-row">
          <li>
            <a href="#">
              <img
                src="images/icon-facebook.svg"
                className="hover:brightness-50 transition-all"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="images/icon-twitter.svg"
                className="hover:brightness-50 transition-all"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="images/icon-pinterest.svg"
                className="hover:brightness-50 transition-all"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="images/icon-instagram.svg"
                className="hover:brightness-50 transition-all"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-[2rem] sm:text-left">
        <ul className="flex flex-col gap-[2rem] font-[600] sm:flex-row sm:flex-wrap">
          <li className="sm:flex-grow-[1] sm:flex flex-col ">
            <span className="block mb-[2rem] text-app-neutral-dark-grayish-violet">
              Our company
            </span>
            <ul className="flex flex-col gap-[0.75rem]">
              <li>
                <a href="#">How we work</a>
              </li>
              <li>
                <a href="#">Why Insure?</a>
              </li>
              <li>
                <a href="#">View plans</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </li>
          <li className="sm:flex-grow-[1] sm:flex flex-col ">
            <span className="block mb-[1.5rem] text-app-neutral-dark-grayish-violet">
              Help me
            </span>
            <ul className="flex flex-col gap-[0.75rem]">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </li>
          <li className="sm:flex-grow-[1] sm:flex flex-col ">
            <span className="block mb-[1.5rem] text-app-neutral-dark-grayish-violet">
              Contact
            </span>
            <ul className="flex flex-col gap-[0.75rem]">
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Live chat</a>
              </li>
            </ul>
          </li>
          <li className="sm:flex-grow-[1] sm:flex flex-col ">
            <span className="block mb-[1.5rem] text-app-neutral-dark-grayish-violet">
              Others
            </span>
            <ul className="flex flex-col gap-[0.75rem]">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
