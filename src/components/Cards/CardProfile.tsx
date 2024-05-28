import { useContext } from "react"
import { BiExit } from "react-icons/bi"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { useTruncate } from "../../hooks/useTruncate";

const itemListStyle = `
  mt-4 
  flex 
  items-center 
  cursor-pointer
  hover:bg-slate-100 
  transition
  duration-350
  ease-in-out
  rounded-md
`;

export const CardProfile = () => {
  const navigate = useNavigate()
  const { signout, user } = useContext(AuthContext)
  const firstLatter = useTruncate(user?.name, 1)

  const toSignout = () => {
    signout()
    navigate('/login')
  }

  const toProfile = () => {
    navigate('/app/profile')
  } 

  return (
    <div className="cursor-default absolute top-[65px] shadow-md rounded-md right-4 bg-white border-slate-100 border-2 p-4 max-w-[500px]">
      <ul>
        <li className="flex items-center border-b-2 pb-4">
          <div className="bg-orange-600 w-10 h-10 flex justify-center items-center rounded-full text-white">
            { firstLatter }
          </div>
          <div className="ml-3">
            <h4>{ user!.name }</h4>
            <p className="text-slate-400">{ user!.email }</p>
          </div>
        </li>
        <li className="py-4 border-b-2 flex justify-between">
          <span className="bg-gray-200 px-3 py-1 text-gray-600 rounded-md text-[13px]">PLANO FREE</span>
          <div>
            <p className="text-slate-400">Faça um upgrade</p>
          </div>
        </li>
        <li className={itemListStyle} onClick={toProfile}>
          <p className="ml-2">Meu perfil</p>
        </li>
        <li onClick={toSignout} className={itemListStyle}>
          <BiExit size={20} />
          <p className="ml-2">Sair do workspace</p>
        </li>
      </ul>
    </div>
  )
}
