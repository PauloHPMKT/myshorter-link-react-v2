import { FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import scissorLink from "../../assets/img/scissor-link.png";
import { FiLink } from "react-icons/fi";

export const Dashboard = () => {
  const navigate = useNavigate();

  const navigaTo = (path: string) => {
    navigate(path);
  }

  return (
    <div className="min-h-[90vh]">
      <div className="pb-11 border-slate-100">
        <h1 className="text-3xl font-bold">Gestor de recursos da Plataforma</h1>
      </div>
      <section className="bg-white rounded-md flex gap-4 p-6">
        <div className="border-2 px-4 py-2 rounded-md min-w-80">
          <div className="flex items-center py-2">
            <h4 className="font-semibold text-[18px] mr-6">Meus link curtos</h4>
            <button 
              onClick={() => navigaTo('/app/links')} 
              className="
                border-primary 
                border-2 
                text-primary 
                rounded-md 
                px-4 
                py-1
                h-10
                transition
                duration-300
                hover:bg-primary
                hover:text-white
              "
            >
              Acessar
            </button>
            <FaLink size={20} color="#333" className="ml-5"/>
          </div>
        </div>
        <div>
          Gerar Qr Code
        </div>
      </section>
      <div className="my-4 flex gap-4">
        <div className="bg-white w-1/2 rounded-md p-6">
          <div className="border-2 overflow-hidden flex rounded-md h-20 items-center justify-between w-full">
            <div className="bg-main w-48">
              <img src={scissorLink} alt="Imagem de um link" className="w-full"/>
            </div>
            <div className="w-[61%] flex items-center px-6">
              <div>
                <h2 className="font-semibold mr-6">Encurtar links</h2>
                <p className="text-[10px] text-gray-500">Clique aqui para criar links encurtados</p>
              </div>
              <button 
                onClick={() => navigaTo('/app/shorten')} 
                className="
                  border-primary 
                  border-2 
                  text-primary 
                  rounded-md 
                  px-4 
                  py-1
                  h-10
                  transition
                  duration-300
                  hover:bg-primary
                  hover:text-white
                "
              >
                Acessar
              </button>
            </div>
          </div>
          <div className="border-2 px-4 py-2 mt-4 rounded-md">
            <h2 className="font-semibold mb-6 mt-2">Últimos links encurtados</h2>
            <div className="w-full">
              <ul className="w-full flex flex-col items-start gap-3">
                <li className="w-full">
                  <button
                    className="
                      flex 
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      items-center 
                      justify-start
                      px-4 
                      text-[14px]"
                  >
                    <FiLink size={18} className="mr-4" />
                    https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      flex 
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      items-center 
                      justify-start
                      px-4 
                      text-[14px]"
                  >
                    <FiLink size={18} className="mr-4" />
                    https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      flex 
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      items-center 
                      justify-start
                      px-4 
                      text-[14px]"
                  >
                    <FiLink size={18} className="mr-4" />
                    https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      flex 
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      items-center 
                      justify-start
                      px-4 
                      text-[14px]"
                  >
                    <FiLink size={18} className="mr-4" />
                    https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/2 rounded-md p-6">
          <div>
            <h2>Encurtar links</h2>
            <div>
              <p>Lista de links</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
