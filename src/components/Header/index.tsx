import { FiLink } from "react-icons/fi";
import { Menu } from "../Menu";
import { CardActions } from "../CardActions";
import { useState } from "react";

export const MainHeader = () => {
  const [isViewMenu, setIsViewMenu] = useState(false);

  const handleShowMenu = () => {
    setIsViewMenu(!isViewMenu);
  }
  return (
    <header className="bg-slate-200 w-full fixed top-0 h-14 px-40 py-10 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-primary p-3 text-teal-50 rounded-[100%] w-10 h-10 flex justify-center items-center">
          <FiLink size={25} />
        </div>
        <h1 className="ml-3 text-primary font-semibold">My Shorter Link</h1>
      </div>
      <Menu showMenu={handleShowMenu} />
      {isViewMenu && <CardActions />}
    </header>
  );
};
