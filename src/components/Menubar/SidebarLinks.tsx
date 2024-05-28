import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiScissorsCutFill } from "react-icons/ri";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { Each } from "../Each";
import { createElement, useEffect, useState } from "react";
import { useStyle } from "../../hooks/useStyles";
import { FiSettings } from "react-icons/fi";
import { Sidebar } from "./Sidebar";
import { BiUser } from "react-icons/bi";



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
    icon: () => <PiLinkSimpleHorizontalBold size={20} />,
  },
  {
    id: "3",
    name: "Encutar links",
    path: "/app/shorten",
    icon: () => <RiScissorsCutFill  size={20} />,
  },
  {
    id: "4",
    name: "Configurações",
    path: "#",
    icon: () => <FiSettings  size={20} />,
  },
]

const submenuItems: MenuProps[] = [
  {
    id: "1",
    name: "Perfil",
    path: "/app/profile",
    icon: () => <BiUser  size={20} />,
  },
]


export const SidebarLinks = () => {
  const classes = useStyle();
  const { pathname } = useLocation();

  const selectionMenuItem = (items: MenuProps[], index: string) => {
    return items.find((item) => item.path === pathname)?.id || index;
  }

  const [selected, setSelected] = useState<string>(selectionMenuItem(menuItems, "4"));
  const [selectSubmenu, setSelectSubmenu] = useState<string>(selectionMenuItem(submenuItems, "1"));
  const [showTeste, setShowTeste] = useState<boolean>(false);

  useEffect(() => {
    setSelected(selectionMenuItem(menuItems, "4"));
    setSelectSubmenu(selectionMenuItem(submenuItems, "1"));
  }, [pathname])

  const handleSelected = (id: string) => {
    if (submenuItems.find((item) => item.id === id)) {
      setSelectSubmenu("");
      return;
    }
    setSelected(id);
  }

  const setSubmenu = () => {
    setShowTeste(false)
  }

  const renderMenuItem = (link: MenuProps) => {
    return link.id === selected;
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
                  onClick={() => link.path === '#' && setShowTeste(true)}
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
      { showTeste && (
        <Sidebar className={`shadow-3xl absolute top-0 left-20 rounded-md border-0 ${classes["animation-swipe"]}`}>
          <nav>
            <ul>
              <Each 
                of={submenuItems}
                render={(link) => (
                  <li 
                    key={link.id} 
                    onClick={() => handleSelected(link.id)}
                  >
                    {selectSubmenu && (
                      <Link 
                        to={link.path} 
                        onClick={setSubmenu}
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
        </Sidebar> 
      )}
    </nav>
  );
}
