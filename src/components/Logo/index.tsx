import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/shortlify-removebg.png";

export const Logo = ({ size }: { size: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logoNavigation = () => {
    if (pathname === '/app/dashboard') {
      return navigate('/app');
    }
    navigate('/');
  }
  
  return(
    <img 
      src={logo} 
      alt="logo Shortlify" 
      onClick={logoNavigation}
      className={`w-[${size}] cursor-pointer`} 
      title="Clique na logo para voltar a Home page"
    />
  )
}
