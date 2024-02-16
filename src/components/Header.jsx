import Navbar from "./Navbar";

function Header() {
  return (
    <header className="">
      <Navbar />
      <section className="bg-app-primary-dark-violet relative z-[0] sm:grid grid-cols-grid-header md:text-left items-center bg-intro-left-pattern-mobile sm:bg-intro-right-pattern-desktop sm:bg-right-top bg-no-repeat sm:gap-[2rem] sm:px-[2rem] lg:px-[5rem] header-help">
        <picture className="sm:order-2 relative z-[-1]">
          <source
            media="(min-width: 640px)"
            srcSet="images/image-intro-desktop.jpg"
          />
          <img
            src="images/image-intro-mobile.jpg"
            className="w-[100%] max-w-[500px] lg:max-w-[none] mx-auto  object-cover md:translate-y-[125px]"
            alt="Descriptive Image Text"
          />
        </picture>
        <div className="py-[5rem] px-[1.25rem] sm:order-1 text-app-neutral-gray">
          <h1 className="text-[3rem] lg:text-[4.25rem] xl:text-[5.25rem] leading-[1] sm:text-[4.rem] text-white">
            Humanizing your insurance.
          </h1>
          <p className="text-white">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>

          <a
            href="#"
            className="button mt-[1.5rem] sm:hover:bg-app-neutral-gray sm:hover:text-app-neutral-very-dark-violet transition-colors"
          >
            View Plans
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
