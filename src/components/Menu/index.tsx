import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const style = {
  IconStyles: "hover:text-slate-950 transition-colors duration-300",
  LinkStyles:
    "text-slate-950 bg-white py-2 px-6 rounded-md text-[18px] font-bold",
};

export const Menu = () => {
  return (
    <nav className="flex gap-5 items-center text-white">
      <a href="https://www.github.com/PauloHPMKT" className={style.IconStyles}>
        <FiGithub size={18} />
      </a>
      <a
        href="https://www.instagram.com/tech_devmais"
        className={style.IconStyles}
      >
        <FiInstagram size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/paulo-sergio-frontend-dev"
        className={style.IconStyles}
      >
        <FiLinkedin size={18} />
      </a>
      <Link to="/links" className={style.LinkStyles}>
        Meus Links
      </Link>
    </nav>
  );
};
