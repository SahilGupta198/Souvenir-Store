import { useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'
import { RiHome3Line, RiUser3Line, RiFunctionLine, RiStackLine, RiSearchLine, RiHeartLine, RiShoppingCartLine } from 'react-icons/ri'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-main font-bold" : ""
        } hover:text-main `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

// const resumeURL = 'http://localhost:3000/resumeCopy.pdf'

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-main2 shadow-md shadow-main";


  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6 flex-row-reverse md:flex-row">
        {/* logo */}
        <h3 className="font-playfair text-xl md:text-3xl text-center font-bold tracking-tighter ">LuxeKeepsakes|</h3>
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between w-[65%]">

            <div className="flex justify-between uppercase items-center gap-10 font-opensans text-md font-semibold">

              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Categories"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Shop"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <AnchorLink
                className="rounded-sm shadow-md shadow-gray bg-light md:ml-1 py-0.5 px-0.5"
                onClick={() => setSelectedPage("login")}
                href="#"
              >
                <div className="bg-main hover:scale-90 shadow-lg shadow-main2 transition duration-500 w-full h-full px-6 py-2 font-playfair font-semibold">LOGIN</div>
              </AnchorLink>
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="flex justify-center items-center text-xl">
                <RiSearchLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
              </div>
              <div className="flex justify-center items-center  text-xl">
                <RiHeartLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
              </div>
              <div className="flex justify-center items-center  text-xl">
                <RiShoppingCartLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            className="fixed left-0 bottom-0 h-full bg-main2 shadow-2xl rounded-sm shadow-main w-[300px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>

            {/* CLOSE ICON */}
            <div className="flex justify-start px-10 py-6">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} className="" />
              </button>
            </div>
            {/* menu */}
            <div className="flex flex-col items-center mx-auto  mt-10 gap-10 text-2xl">
              {/* MENU ITEMS */}

              <div className="flex justify-between items-center gap-3 w-48 ">
                <div className="flex justify-center items-center text-3xl">
                  <RiSearchLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
                </div>
                <div className="flex justify-center items-center  text-3xl">
                  <RiHeartLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
                </div>
                <div className="flex justify-center items-center  text-3xl">
                  <RiShoppingCartLine className="text-light hover:scale-110 hover:text-main transition duration-300 cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 rounded-sm px-12 py-4  ">
                <RiHome3Line className="text-main" />
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiStackLine className="text-main" />
                <Link
                  page="Categories"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiFunctionLine className="text-main" />
                <Link
                  page="Shop"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiUser3Line className="text-main" />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <AnchorLink
                className="rounded-sm shadow-md shadow-gray bg-light md:ml-1 py-0.5 px-0.5"
                onClick={() => setSelectedPage("login")}
                href="#"
              >
                <div className="bg-main hover:scale-90 shadow-lg shadow-main transition duration-500 w-full h-full px-6 py-2 font-playfair font-semibold">LOGIN</div>
              </AnchorLink>
            </div>

          </motion.div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
