import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const IconStyles = "hover:text-slate-950 transition-colors duration-300";

export const Menu = () => {
  return (
    <nav className="flex gap-5 items-center text-white">
      <a href="https://www.github.com/PauloHPMKT" className={IconStyles}>
        <FiGithub size={18} />
      </a>
      <a href="https://www.intagram.com/tech_devmais" className={IconStyles}>
        <FiInstagram size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/paulo-sergio-frontend-dev"
        className={IconStyles}
      >
        <FiLinkedin size={18} />
      </a>
      <Link
        to="/links"
        className="text-slate-950 bg-white py-2 px-6 rounded-md text-[18px] font-bold"
      >
        Meus Links
      </Link>
    </nav>
  );
};
