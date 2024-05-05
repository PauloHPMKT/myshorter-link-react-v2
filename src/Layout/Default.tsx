import { Outlet } from "react-router-dom";
import { useStyle } from "../hooks/useStyles";

export const RootLayout = () => {
  const classes = useStyle();

  return (
    <div className={`flex ${classes.animationFade}`}>
      <div className="w-[250px] fixed bg-red-300 h-screen">
        <aside>Barra lateral</aside>
      </div>
      <div className="pl-[250px] w-full">
        <header>Aqui será o cabeçalho da página</header>
        <Outlet />
      </div>
    </div>
  )
}
