import { BiLink } from "react-icons/bi";
// import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const style = {
  LinkStyles: `
    text-[#134EA8]
    rounded-md
    text-[16px]
    font-semibold
    hover:underline 
    transition-colors 
    duration-300
    flex
    items-center
    p-2
  `
}
export const CardActions = () => (
  <div className="flex flex-col bg-white rounded-md absolute top-[75px] right-[160px] shadow-lg p-3 border-2 ">
    <Link to="/links" className={style.LinkStyles}>
      <BiLink size={18} />
      <p className="ml-2">Meus Links</p>
    </Link>
    {/* <Link to="/login" className={style.LinkStyles}>
      <MdDashboard size={18} />
      <p className="ml-2">Painel de controle</p>
    </Link> */}
  </div>
)