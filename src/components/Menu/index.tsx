import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   navigate('/login');
  // }

  // const navigateToRegister = () => {
  //   navigate('/register');
  // }

  const navigateToLinks = () => {
    navigate('/links');
  }
  return (
    <nav className="flex gap-5 items-center">
      <button 
        onClick={navigateToLinks}
        className="bg-primary h-[40px] px-5 rounded-2xl text-white font-medium"
      >
        Acessar área de links
      </button>
    </nav>
    // <nav className="flex gap-5 items-center">
    //   <button onClick={navigateToLogin} className="font-medium">
    //     Login  
    //   </button>
    //   <button 
    //     onClick={navigateToRegister}
    //     className="bg-primary h-[40px] px-5 rounded-2xl text-white font-medium"
    //   >
    //     Crie sua conta
    //   </button>
    // </nav>
  );
};
