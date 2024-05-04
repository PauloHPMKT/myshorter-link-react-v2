import { Link } from "react-router-dom";
import { useStyle } from "../../hooks/useStyles";
import { Logo } from "../../components/Logo";

export const Login = () => {
  const classes = useStyle();
  return (
    <div className="h-screen">
      <div className={`flex items-center flex-col h-screen justify-center ${classes['animation-slidedown']}`}>
        <div className="mb-10 flex justify-center items-center flex-col">
          <Logo />
          <div className="flex items-center">
            <p className="text-lg mt-6 text-slate-600 font-medium">Ainda não possui conta?</p>
            <Link to="/register" className="text-primary text-lg mt-6 ml-2 font-medium hover:underline">Crie sua conta</Link>
          </div>
        </div>
        <form className="w-[400px] flex flex-col gap-3">
          <div>
            <label className="text-md font-semibold">E-mail</label>
            <input
              type="text"
              placeholder="meuemail@example.com"
              className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-2 text-[16px] "
            />
          </div>
          <div className="mb-2">
            <label className="text-md font-semibold">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-2 text-[16px] "
            />
          </div>
          <button className="bg-primary h-[46px] px-5 rounded-2xl text-white font-medium">Login</button>
        </form>
      </div>
    </div>
  )
}
