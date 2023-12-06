import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export const ContactBottomLeft = () => {
  return (
    <div className="space-y-8 lg:mt-0 mt-10">
      <div className="text-white lg:text-primary space-y-2">
        <p className="font-bold">Corporate Headquarters</p>
        <p className="text-sm">
          1584 Biscayne Boulevard <br />
          Miami FL, 33176
        </p>
      </div>
      <div className="flex gap-2">
        <span className="text-white bg-facebook p-2 text-2xl rounded-sm">
          <FaFacebook />
        </span>
        <span className="text-white bg-linkedin p-2 text-2xl rounded-sm">
          <FaLinkedin />
        </span>
        <span className="text-white bg-youtube p-2 text-2xl rounded-sm">
          <FaYoutube />
        </span>
        <span className="text-white bg-instagram p-2 text-2xl rounded-sm">
          <FaInstagram />
        </span>
        <span className="text-white bg-twitter p-2 text-2xl rounded-sm">
          <FaTwitter />
        </span>
        <span className="text-white bg-github p-2 text-2xl rounded-sm">
          <FaGithub />
        </span>
      </div>
    </div>
  );
};
