import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Account } from "../../types/Account";
import { useStyle } from "../../hooks/useStyles";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { LogoRotation } from "../../components/Loaders/LogoRotation";

export const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const auth = useContext(AuthContext);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToLogin: Account.toLogin = {
      email: (form.current?.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.current?.elements.namedItem('password') as HTMLInputElement).value,
    }
    setLoading(true);
    setTimeout(async () => {
      const isLogged = await auth.signin(dataToLogin.email, dataToLogin.password);
      if (!isLogged) {
        alert('Usuário ou senha inválidos');
        return;
      }
      setLoading(false);
      navigate('/app/dashboard');
    }, 1500)
  }

  return (
    <>
      {loading ? (
        <LogoRotation message="Carregando..." />
      ) : (
        <div className="h-screen">
          <div className={`flex items-center flex-col h-screen justify-center ${classes['animation-slidedown']}`}>
            <div className="mb-10 flex justify-center items-center flex-col">
              <Logo size="200px" />
              <div className="flex items-center">
                <p className="text-lg mt-6 text-slate-600 font-medium">Ainda não possui conta?</p>
                <Link to="/register" className="text-primary text-lg mt-6 ml-2 font-medium hover:underline">Crie sua conta</Link>
              </div>
            </div>
            <form 
              ref={form}
              onSubmit={handleLogin}
              className="w-[400px] flex flex-col gap-3"
            >
              <div>
                <label className="text-md font-semibold">E-mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="meuemail@example.com"
                  className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-2 text-[16px] "
                />
              </div>
              <div className="mb-2">
                <label className="text-md font-semibold">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-2 text-[16px] "
                />
              </div>
              <button className="bg-primary h-[46px] px-5 rounded-2xl text-white font-medium">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
