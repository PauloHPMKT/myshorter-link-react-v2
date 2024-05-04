import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/shortlify-removebg.png";

export const Logo = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }
  
  return(
    <img 
      src={logo} 
      alt="logo Shortlify" 
      onClick={backToHome}
      className="w-[200px] cursor-pointer" 
      title="Clique na logo para voltar a Home page"
    />
  )
}
