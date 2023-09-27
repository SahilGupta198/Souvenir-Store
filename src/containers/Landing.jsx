import useMediaQuery from "../hooks/useMediaQuery";
// import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cart from '../assets/craft.png'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home" className="md:flex md:justify-around md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="basis-2/5 mt-16 md:m-1 flex justify-center md:order-2">
        {isAboveLarge ? (
          <img
            alt="profile"
            className="z-10 w-full drop-shadow-2xl max-w-[200px] md:max-w-[400px] "
            src={cart}
          />
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px]"
            src={cart}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-16 flex flex-col items-center justify-center ">
        {/* HEADINGS */}
        <p className="mb-14 text-4xl leading-[2.8rem] md:w-[120%] md:text-6xl md:leading-[4rem] tracking-normal font-playfair z-10 text-center  font-bold drop-shadow-lg uppercase">Buy <span className='bg-main text-white italic rounded-lg drop-shadow-lg'>Souvenirs</span> that Share Your <span className='bg-main text-white italic rounded-lg drop-shadow-lg'>Travel</span> Story</p>

        {/* CALL TO ACTIONS */}

        <AnchorLink
          className="rounded-sm shadow-md shadow-gray bg-light md:ml-1 py-1 px-1"
          onClick={() => setSelectedPage("contact")}
          href="#shop"
        >
          <div className="bg-gradient3 hover:scale-90 shadow-lg shadow-main2 transition duration-500 w-full h-full px-10 py-4 font-playfair font-semibold">SHOP NOW</div>
        </AnchorLink>
      </div>
    </section>
  );
};

export default Landing;
