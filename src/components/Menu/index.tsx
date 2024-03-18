import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";

interface MenuProps {
  showMenu: () => void;
}

const style = {
  IconStyles: "text-[#134EA8] hover:text-slate-950 transition-colors duration-300",
};

export const Menu = ({ showMenu }: MenuProps) => {
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
      <CgMenuGridO 
        size={38} 
        color="#121212" 
        cursor="pointer" 
        onClick={showMenu}
      />
    </nav>
  );
};
