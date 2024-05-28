import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Menubar/Sidebar";
import { CardProfile } from "../components/Cards/CardProfile";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useTruncate } from "../hooks/useTruncate";
import { useStyle } from "../hooks/useStyles";
import logo from '../assets/img/shortlify-removebg.png'
import { SidebarLinks } from "../components/Menubar/SidebarLinks";

export const RootLayout = () => {
  const classes = useStyle();
  const { user } = useContext(AuthContext);
  const firstLatter = useTruncate(user?.name, 1)
  const [showProfileCard, setProfileCard] = useState<boolean>(false);

  const toggleProfileCard = () => {
    setProfileCard(!showProfileCard);
  }

  return (
    <div className={`flex ${classes.animationFade} flex w-full min-h-screen`}>
      <header className="px-11 h-[70px] flex justify-between items-center fixed border-b-2 w-full z-10 bg-white">
        <div>
          <Link 
            to="/app" 
            className="
              hover:bg-slate-100 
              transition
              duration-350
              ease-in-out
              rounded-md
              w-full 
              flex 
              justify-center 
              items-center
            ">
            <img src={logo} alt="" className="w-[160px]"/>
          </Link>  
        </div>
        <div onClick={toggleProfileCard} className="flex items-center cursor-pointer">
          <div className="bg-orange-600 w-10 h-10 flex justify-center items-center rounded-full text-white">
            { firstLatter }
          </div>
          {user && (
            <div className="ml-2">{user.name}</div>
          )}
          {showProfileCard && <CardProfile />}
        </div>
      </header>
      <div className="flex mt-[70px] w-full">
        <Sidebar>
          <SidebarLinks />
        </Sidebar>
        <main className="pl-[25%] pt-11 pr-[10%] bg-main w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
