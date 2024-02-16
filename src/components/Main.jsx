function Main() {
  return (
    <main className="py-[5rem] lg:py-[10rem] px-[2rem] lg:px-[5rem]">
      <h2 className="text-[2.5rem] xl:text-[4.25rem] lg:pt-[5rem]">
        We're different
      </h2>

      <section className="py-[3rem] lg:py-[6rem] flex flex-col sm:flex-row justify-center items-center gap-[1rem] sm:flex-wrap md:flex-nowrap">
        <article className="different sm:items-start max-w-[400px]">
          <img src="images/icon-snappy-process.svg" alt="" />
          <h3 className="text-[1.5rem]">Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </article>
        <article className="different sm:items-start max-w-[400px]">
          <img src="images/icon-affordable-prices.svg" alt="" />
          <h3 className="text-[1.5rem]">Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </article>
        <article className="different sm:items-start max-w-[400px]">
          <img src="images/icon-people-first.svg" alt="" />
          <h3 className="text-[1.5rem]">People First Process</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </article>
      </section>

      <section className="bg-app-primary-dark-violet text-center text-white px-[1.5rem] py-[4rem] bg-how-pattern-mobile sm:bg-how-pattern-desktop how-bg ">
        <h2 className="text-[2.5rem] text-white">
          Find out more about how we work
        </h2>
        <button className="button mx-auto sm:hover:bg-app-neutral-gray sm:hover:text-app-neutral-very-dark-violet transition">
          How we work
        </button>
      </section>
    </main>
  );
}

export default Main;
