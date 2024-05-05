import { Menu } from "../Menu";
import { Logo } from "../Logo";

export const MainHeader = () => {
  return (
    <header className="max-w-[1300px] m-auto h-14 py-10 flex justify-between items-center">
      <div className="flex items-center w-[180px]">
        <Logo size="200px" />
      </div>
      <Menu />
    </header>
  );
};
