import { useContext, useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { BaseButton } from "../../components/Buttons/BaseButton";
import { MdVerified } from "react-icons/md";

export const UserProfile = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.user);
  }, [auth.user]);
  
  return (
    <div className="min-h-[90vh]">
      <div className="pb-11 border-b-2 border-slate-300 mb-6">
        <h1 className="text-3xl font-bold">Perfil do usuário</h1>
      </div>
      <section className="bg-white rounded-lg p-6 mb-4">
        <div className="w-full mb-12">
          <h3 className="text-[20px] mb-2 font-semibold">Nome do usuário</h3>
          <input
            type="text"
            value={user?.name}
            placeholder="Seu nome de usuário"
            className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-4 text-[16px] mb-4"
          />
          <BaseButton className="font-semibold">
            Alterar o seu nome
          </BaseButton>
        </div>
        <div className="w-full mb-12">
          <h3 className="text-[20px] font-semibold">Meus e-mails</h3>
          <p className="my-2 text-gray-600">Selecione ou adicione um novo e-mail para sua lista de e-mails. Os e-mails adicionados obterão acesso a sua conta.</p>
          <div>
            <div className="flex py-3">
              <div className="w-[33.3%] font-semibold">E-mail atual</div>
              <div className="w-[33.3%] font-semibold">Status</div>
              <div className="w-[33.3%] font-semibold">Habilitado</div>
            </div>
            <div className="flex border-y-2 border-slate-300 py-3 mb-4">
              <div className="w-[33.3%]">{user?.email}</div>
              <div className="w-[33.3%] flex">
                <MdVerified size={24} color="green" className="mr-2"/>
                vrificado
              </div>
              <div className="w-[33.3%]">
                <input type="radio"/>
              </div>
            </div>
            <BaseButton className="font-semibold">
              Adicionar novo E-mail 
            </BaseButton>
          </div>
        </div>
        <div className="w-full mb-12">
          <h3 className="text-[20px] mb-2 font-semibold">Segurança e Permissões</h3>
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Alteração de senha</h4>
            <input type="text" className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-4 text-[16px] mb-4" placeholder="senha atual" />
            <input type="text" className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-4 text-[16px] mb-4" placeholder="Nova senha" />
            <input type="text" className="w-full h-12 rounded-md text-slate-900 border-2 placeholder-alpha-2 px-4 text-[16px] mb-4" placeholder="Confirmar nova senha" />
            <BaseButton className="font-semibold w-[150px]">
              Alterar senha
            </BaseButton>
          </div>
        </div>
        <div className="w-full mb-12 border-t-2 border-slate-300">
          <h3 className="text-[20px] my-4 font-semibold">Desativar conta</h3>
          <p className="mb-6 text-gray-600">Desativar sua conta irá desativar todos os seus links e desativar sua conta. Você pode reativar sua conta a qualquer momento.</p>
          <BaseButton className="font-semibold bg-red-600">
            Desativar conta
          </BaseButton>
        </div>
      </section>
    </div>
  );
}
