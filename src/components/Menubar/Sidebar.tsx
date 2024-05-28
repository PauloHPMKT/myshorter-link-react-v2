import { twMerge } from "tailwind-merge";
import { ReactElement } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | ReactElement;
}

export const Sidebar = ({ children, ...rest }: SidebarProps) => {
  return (
    <aside 
      { ...rest }
      className={twMerge("w-[250px] fixed h-screen p-3 border-r-2 bg-white", rest.className)}>
      <div>
        { children }
      </div>
    </aside>
  );
}
