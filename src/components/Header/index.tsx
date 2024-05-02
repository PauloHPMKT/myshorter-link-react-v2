import { Menu } from "../Menu";
import logo from "../../assets/img/shortlify-removebg.png";

export const MainHeader = () => {
  return (
    <header className="max-w-[1300px] m-auto h-14 py-10 flex justify-between items-center">
      <div className="flex items-center w-[180px]">
        <img src={logo} alt="shortlify logo" className="w-full" />
      </div>
      <Menu />
    </header>
  );
};
