import { FiLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import scissorLink from "../../assets/img/scissor-link.png";
import shortenLinks from "../../assets/img/short-link.png";
import { TemplatePageItem } from "..";

export const Dashboard = () => {
  const navigate = useNavigate();

  const navigaTo = (path: string) => {
    navigate(path);
  }

  return (
    <TemplatePageItem.Root>
      <TemplatePageItem.TitleContent>
        <TemplatePageItem.Title>
          Gerenciamento da Plataforma
        </TemplatePageItem.Title>
      </TemplatePageItem.TitleContent>
      <section className="bg-white rounded-md flex gap-4 p-4">
        <div className="border-2 overflow-hidden w-1/2 flex rounded-md h-full items-center justify-between">
          <div className="flex items-center">
            <div className="bg-main w-48">
              <img src={shortenLinks} alt="Imagem de um link" className="w-full"/>
            </div>
            <div className="w-[61%] flex items-center justify-between mr-4">
              <div className="ml-3">
                <h4 className="font-semibold text-[18px] mr-6">Meus link curtos</h4>
                <p className="text-[10px] text-gray-400">Acesse seus links encurtados</p>
              </div>
              <button 
                onClick={() => navigaTo('/app/links')} 
                className="
                  border-slate-200 
                  border-2 
                  text-primary 
                  rounded-md 
                  px-2
                  py-1
                  h-10
                  text-[14px]
                  font-semibold
                  transition
                  duration-300
                  hover:bg-primary
                  hover:border-0
                  hover:text-white
                "
              >
                Ir para links
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 overflow-hidden w-1/2 flex rounded-md h-full items-center justify-between">
          <div className="flex items-center">
            <div className="bg-main w-48">
              <img src={shortenLinks} alt="Imagem de um link" className="w-full"/>
            </div>
            <div className="w-[61%] flex items-center justify-between mr-4">
              <div className="ml-3">
                <h4 className="font-semibold text-[18px] mr-6">Meus link curtos</h4>
                <p className="text-[10px] text-gray-400 mr-6">Acesse seus links encurtados</p>
              </div>
              <button 
                onClick={() => navigaTo('/app/links')} 
                className="
                  border-slate-200 
                  border-2 
                  text-primary 
                  rounded-md 
                  px-2
                  py-1
                  h-10
                  text-[14px]
                  font-semibold
                  transition
                  duration-300
                  hover:bg-primary
                  hover:border-0
                  hover:text-white  
                "
              >
                Ir para links
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="my-4 flex gap-4">
        <div className="bg-white w-1/2 rounded-md p-4">
          <div className="border-2 overflow-hidden min-w-80 flex rounded-md h-20 items-center justify-between">
            <div className="bg-main w-48">
              <img src={scissorLink} alt="Imagem de um link" className="w-full"/>
            </div>
            <div className="w-[61%] flex items-center justify-between mr-4">
              <div className="ml-3">
                <h2 className="font-semibold mr-6 text-[18px]">Encurtar links</h2>
                <p className="text-[10px] text-gray-400 mr-6">Clique aqui para criar links encurtados</p>
              </div>
              <button 
                onClick={() => navigaTo('/app/shorten')} 
                className="
                  border-slate-200 
                  border-2 
                  text-primary 
                  rounded-md 
                  px-2
                  py-1
                  h-10
                  text-[14px]
                  font-semibold
                  transition
                  duration-300
                  hover:bg-primary
                  hover:border-0
                  hover:text-white  
                "
              >
                Encurtar
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
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      px-4 
                      text-[14px]"
                  >
                    <div className="flex items-center">
                      <FiLink size={18} className="mr-4" />
                      <p className="text-start">https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js</p>
                    </div>
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      px-4 
                      text-[14px]"
                  >
                    <div className="flex items-center">
                      <FiLink size={18} className="mr-4" />
                      <p className="text-start">https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js</p>
                    </div>
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      px-4 
                      text-[14px]"
                  >
                    <div className="flex items-center">
                      <FiLink size={18} className="mr-4" />
                      <p className="text-start">https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js</p>
                    </div>
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="
                      h-12 
                      w-full
                      bg-slate-50
                      rounded-md 
                      px-4 
                      text-[14px]"
                  >
                    <div className="flex items-center">
                      <FiLink size={18} className="mr-4" />
                      <p className="text-start">https://github.com/PauloHPMKT/portfolio-paulo-devmais/blob/master/app.js</p>
                    </div>
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
    </TemplatePageItem.Root>
  );
}
