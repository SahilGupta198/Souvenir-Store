import Navbar from "./containers/Navbar";
import Landing from "./containers/Landing";
import Categories from "./containers/Categories";
import Shop from "./containers/Shop";
import About from "./containers/About";
// import ProductDetails from "./containers/ProductDetails";
import Footer from "./containers/Footer";
import { useEffect, useState } from "react";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="app bg-light" >
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-30 md:h-full bg-gradient2 md:bg-gradient1 rounded-b-2xl">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto mb-20 md:mb-30">
        <Categories />
      </div>
      <div className="mx-auto w-full bg-gradient2 rounded-2xl">
        <Shop />
      </div>
      <div className="md:h-full">
        <About />
      </div>
      {/* <div className="product-details">
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
