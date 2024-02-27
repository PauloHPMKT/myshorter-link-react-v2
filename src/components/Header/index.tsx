import { Menu } from "../Menu";

export const MainHeader = () => {
  return (
    <header className="w-full fixed top-0 h-14 px-40 py-10 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="ml-3 text-white font-semibold">My Shorter Link</h1>
      </div>
      <Menu />
    </header>
  );
};
