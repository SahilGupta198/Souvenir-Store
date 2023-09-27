import { FaLinkedin, FaYoutubeSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

const SocialMediaIcons = ({ flexDirection }) => {
  return (
    <div className={`flex ${flexDirection} gap-5`}>
      <a
        className="hover:text-main2 hover:scale-90 transition duration-500 text-3xl"
        href="#linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="hover:text-main2 hover:scale-90 transition duration-500 text-3xl"
        href="#youtube"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutubeSquare />
      </a>
      <a
        className="hover:text-main2 hover:scale-90 transition duration-500 text-3xl"
        href="#facebook"
        target="_blank"
        rel="noreferrer">
        <FaFacebookSquare />
      </a>
      <a
        className="hover:text-main2 hover:scale-90 transition duration-500 text-3xl"
        href="#instagram"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
