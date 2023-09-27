import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-main2 mt-24">
      <div className="mx-auto w-full max-w-screen-xl p-4" >

        {/* upper section */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="top-0 flex flex-col ">
              <span className="self-start text-3xl tracking-tighter font-semibold text-white hover:scale-90 transition duration-500 mb-4">LuxeKeepsakes|</span>
              <span className="self-start md:text-md text-gray-200">Agra, India</span>
              <span className="self-start md:text-md text-gray-200">+91 7045100846</span>
              <span className="self-start md:text-md text-gray-200">Support@luxekeepsakes.com</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sitemap</h2>
              <ul className="text-gray-300 font-base gap-2">
                <li>
                  <a href="#home" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="#categories" className="hover:underline">Categories</a>
                </li>
                <li>
                  <a href="#shop" className="hover:underline">Shop</a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">About</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Account</h2>
              <ul className="text-gray-300 font-base gap-2">
                <li >
                  <a href="#about" className="hover:underline">Sign in</a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">Sign up</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
              <ul className="text-gray-300 font-base gap-2">
                <li >
                  <a href="#about" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-5 border-gray-400 sm:mx-auto " />

        {/* lower section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <span className="text-sm text-light sm:text-center">© 2023 <a href="#home" className="hover:cursor-pointer">LuxeKeepsakes™</a> | All Rights Reserved.
          </span>
          <div className="flex sm:justify-center my-2 md:my-0">
            <SocialMediaIcons />
          </div>
        </div>
      </div >
    </footer >

  );
};

export default Footer;
