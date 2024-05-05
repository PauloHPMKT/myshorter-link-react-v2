import { SidebarLinks } from "./SidebarLinks";

export const Sidebar = () => {
  return (
    <aside className="w-[250px] fixed h-screen p-3 border-r-2 bg-white">
      <div>
        <SidebarLinks />
      </div>
    </aside>
  );
}
