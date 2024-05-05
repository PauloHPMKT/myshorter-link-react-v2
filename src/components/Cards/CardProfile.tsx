import { useContext } from "react"
import { BiExit } from "react-icons/bi"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { useNavigate } from "react-router-dom"

export const CardProfile = () => {
  const navigate = useNavigate()
  const { signout } = useContext(AuthContext)

  const toSignout = () => {
    signout()
    navigate('/login')
  }

  return (
    <div className="cursor-default absolute top-[65px] shadow-md rounded-md right-4 bg-white border-slate-100 border-2 p-4 max-w-[500px]">
      <ul>
        <li className="flex items-center border-b-2 pb-4">
          <div className="bg-orange-600 w-10 h-10 flex justify-center items-center rounded-full text-white">
            H
          </div>
          <div className="ml-3">
            <h4>Haliane Pessoa Nascimento</h4>
            <p className="text-slate-400">halianepessoa20@gmail.com</p>
          </div>
        </li>
        <li className="py-4 border-b-2 flex justify-between">
          <span className="bg-gray-200 px-3 py-1 text-gray-600 rounded-md text-[13px]">PLANO FREE</span>
          <div>
            <p className="text-slate-400">Faça um upgrade</p>
          </div>
        </li>
        <li className="pt-4 flex items-center cursor-pointer">
          <p className="ml-2">Meu perfil</p>
        </li>
        <li onClick={toSignout} className="pt-4 flex items-center cursor-pointer">
          <BiExit size={20} />
          <p className="ml-2">Sair do workspace</p>
        </li>
      </ul>
    </div>
  )
}
