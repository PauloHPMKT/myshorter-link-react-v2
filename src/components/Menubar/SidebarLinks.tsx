import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiScissorsCutFill } from "react-icons/ri";
import { PiLinkSimpleHorizontalBold  } from "react-icons/pi";
import { Each } from "../Each";
import { createElement, useEffect, useState } from "react";
import { useStyle } from "../../hooks/useStyles";



interface MenuProps {
  id: string;
  name: string;
  path: string;
  icon: () => JSX.Element;
}

const menuItems: MenuProps[] = [
  {
    id: "1",
    name: "Dashboard",
    path: "/app/dashboard",
    icon: () => <LuLayoutDashboard size={20} />,
  },
  {
    id: "2",
    name: "Meus Links",
    path: "/app/links",
    icon: () => <PiLinkSimpleHorizontalBold  size={20} />,
  },
  {
    id: "3",
    name: "Encutar links",
    path: "/app/shorten",
    icon: () => <RiScissorsCutFill  size={20} />,
  },
]


export const SidebarLinks = () => {
  const classes = useStyle();
  const { pathname } = useLocation();
  const selectionMenuItem = () => {
    return menuItems.includes(menuItems.find((item) => item.path === pathname) as MenuProps)
    ? menuItems.find((item) => item.path === pathname)?.id as string
    : "1"
  }

  const [selected, setSelected] = useState<string>(selectionMenuItem());

  useEffect(() => {
    setSelected(selectionMenuItem());
  }, [pathname])

  const handleSelected = (id: string) => {
    setSelected(id);
  }

  const renderMenuItem = (link: MenuProps) => {
    return link.id === selected
  }

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <Each 
          of={menuItems}
          render={(link) => (
            <li 
              key={link.id} 
              onClick={() => handleSelected(link.id)}
            >
              {selected && (
                <Link 
                  to={link.path} 
                  className={`flex items-center py-4 ${renderMenuItem(link)
                    ? classes.selected
                    : classes.hover
                  }`}
                >
                  {createElement(link.icon, { size: 20 })}
                  <span className="ml-3">{link.name}</span>
                </Link>
              )}
            </li>
          )}
        />
      </ul>
    </nav>
  );
}
