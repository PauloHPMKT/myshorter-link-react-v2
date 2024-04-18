import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

const style = {
  iconStyles: "text-white hover:text-slate-950 transition-colors duration-300 ease-in-out"
}

export const Social = () => {
  return (
    <nav className="flex gap-5 items-center text-white">
      <a 
        href="https://www.linkedin.com/in/paulo-sergio-frontend-dev" 
        target="_blank" 
        rel="noreferrer"
        className={style.iconStyles}
      >
        <FiLinkedin size={19} />
      </a>
      <a 
        href="https://www.github.com/PauloHPMKT" 
        target="_blank" 
        rel="noreferrer"
        className={style.iconStyles}  
      >
        <FiGithub size={19} />
      </a>
      <a 
        href="https://www.instagram.com/tech_devmais" 
        target="_blank" 
        rel="noreferrer"
        className={style.iconStyles}  
      >
        <FiInstagram size={19} />
      </a>
    </nav>
  )
}