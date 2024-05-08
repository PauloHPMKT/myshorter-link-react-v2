import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    const token = localStorage.getItem('access_token');
    token 
      ? navigate('/app/dashboard')
      : navigate('/login');
  }

  const navigateToRegister = () => {
    navigate('/register');
  }
  return (
    <nav className="flex gap-5 items-center">
      <button onClick={navigateToLogin} className="font-medium">
        Login  
      </button>
      <button 
        onClick={navigateToRegister}
        className="bg-primary h-[40px] px-5 rounded-2xl text-white font-medium"
      >
        Crie sua conta
      </button>
    </nav>
  );
};
