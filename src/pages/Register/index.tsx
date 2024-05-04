import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Spinning } from "../../components/Loaders/Spinning";
import { Logo } from "../../components/Logo";
import { useStyle } from "../../hooks/useStyles";
import { useToastify } from "../../hooks/useToastify";
import userService from "../../services/user/user.service";
import { Account } from "../../types/interfaces";

export const Register = () => {
  const classes = useStyle();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const timerToCloseRequest = (ref: React.RefObject<HTMLFormElement>) => {
    setTimeout(() => {
      setLoading(false);
      ref && ref.current?.reset();
    }, 3000);
  }

  const validateFields = (data: Account.toCreate) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      useToastify('error', 'Preencha todos os campos para continuar');
      return false;
    }
    return true;
  }

  const handleSubmitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataToCreate: Account.toCreate = {
      name: (form.current?.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.current?.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.current?.elements.namedItem('password') as HTMLInputElement).value,
    }

    if (!validateFields(dataToCreate)) return;

    try {
      setLoading(true);
      const { status } = await userService.create(dataToCreate);
      if (status !== 201) {
        useToastify('error', 'Ops! Houve um erro ao criar seu usuário')
        timerToCloseRequest(form);
      }

      useToastify('success', 'Usuário criado com sucesso!');
      timerToCloseRequest(form);
    } catch (error) {
      useToastify('error', 'Ops! Houve um erro ao criar o usuário')
    }
  }

  return (
    <div className="h-screen">
      <div className={`flex items-center flex-col h-screen justify-center ${classes['animation-slidedown']}`}>
        <div className="mb-10 flex justify-center items-center flex-col">
          <Logo />
          <div className="flex items-center">
            <p className="text-lg mt-6 text-slate-600 font-medium">Já tem uma conta conosco?</p>
            <Link to="/login" className="text-primary text-lg mt-6 ml-2 font-medium hover:underline">Fazer Login</Link>
          </div>
        </div>
        <form 
          ref={form}
          onSubmit={handleSubmitUser} 
          className="w-[400px] flex flex-col gap-3"
        >
          <div>
            <label className="text-md font-semibold">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="seu nome de usuário"
              className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-2 text-[16px] "
            />
          </div>
          <div>
            <label className="text-md font-semibold">E-mail</label>
            <input
              type="email"
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
          <button className="bg-primary h-[46px] px-5 rounded-2xl text-white font-medium flex justify-center items-center">
            <p className="mr-5">Cadastrar</p>
            {loading && <Spinning />}
          </button>
        </form>
      </div>
    </div>
  )
}
