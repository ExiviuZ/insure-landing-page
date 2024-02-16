import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-intro-right-pattern-mobile sm:bg-intro-left-pattern-desktop bg-no-repeat pattern-div sm:bg-left sm:text-left z-[1]">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
