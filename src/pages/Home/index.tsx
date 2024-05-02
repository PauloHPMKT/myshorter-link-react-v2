import { FiLink } from "react-icons/fi";
import { useStyle } from "../../hooks/useStyles";
import { MainHeader } from "../../components/Header";
import { useEffect, useState } from "react";
import linksService from "../../services/links.service";
import { ShortenLinkProps } from "../../types/interfaces";
import { LinkItem } from "../../components/LinkItem";
import { ToastContainer, toast } from "react-toastify";
import working from "../../assets/img/illustration-working.svg";
import logoWhite from "../../assets/img/white-shortlify-logo.png";
import "react-toastify/dist/ReactToastify.css";
import { Social } from "../../components/Social";

export const Home = () => {
  const classes = useStyle();
  const [url, setUrl] = useState("");
  const [year, setYear] = useState<number>(0);
  const [data, setData] = useState<ShortenLinkProps | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [])

  const handleShortenLink = async () => {
    try {
      if (url === "") {
        toast.error("Ops! Digite ou cole uma URL");
        return;
      }

      const { data } = await linksService.generateShortenLink(url);
      setData(data);
      setShowModal(true);
      setUrl("");
    } catch (error) {
      if (error) toast.error("Ops deu erro!");
    }
  };

  return (
    <>
      <MainHeader />
      <main>
        <section className="w-[1300px] px-3 flex m-auto pt-16 pb-36">
          <div className="w-1/2 flex flex-col justify-center pr-14">
            <h1 className="text-6xl leading-none font-bold text-zinc-900">Mais que apenas um encurtador de links</h1>
            <p className="text-lg mt-6 text-slate-600 font-medium">
              Compartilhe links com segurança e confiança com o Shortlify. 
              Projetado para ajudar a aumentar a conversão e a confiabilidade do seu negócio.
            </p>
            <div className="mt-6">
              <button className="bg-primary h-[44px] px-5 rounded-2xl text-white font-medium">Comece gratuitamente</button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src={working} alt="working" className="w-[95%]"/>
          </div>
        </section>
        <section className="relative max-w-[1300px] m-auto py-5">
          <div className="absolute -bottom-14 left-1/2 -translate-x-[50%]">
            <div
              className={`w-[1000px] rounded-2xl bg-slate-500 py-10 px-10 flex items-center justify-center ${classes["animation-slideup"]}`}
            >
              <div className="w-full h-12 bg-white flex justify-center items-center rounded-md">
                <FiLink size={24} color="#7a7777" className="mx-2" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Cole aqui seu link!"
                  className="w-full h-full text-slate-900 bg-transparent border-none outline-none placeholder-alpha-2 text-[19px] "
                />
              </div>
              <button
                onClick={handleShortenLink}
                className="
                  h-12 
                  w-1/5
                  ml-2
                  border-none 
                  rounded-md 
                  text-white 
                  text-[16px] 
                  font-medium  
                  cursor-pointer 
                  bg-primary 
                  hover:scale-x-105 
                  transition-transform 
                  duration-700"
              >
                Encurtar
              </button>
            </div>
          </div>
        </section>
        <section className="bg-slate-200 pt-36 pb-20 flex justify-center text-slate-950">
          <div className="w-[550px] text-center">
            <h3 className="font-bold text-3xl mb-5">Gerencie suas URLs</h3>
            <p className="text-lg mt-6 text-slate-600 font-medium">
              Armazene seus links encurtados e não perca o controle sobre os links que você envia. Tenha tudo a mão!
            </p>
          </div>
        </section>
        <footer className="bg-slate-900 flex items-center text-white">
          <div className="w-full h-full pt-14">
            <div className="h-[90%] flex pb-10 max-w-[1300px] m-auto">
              <div className="w-1/2">
                <div className="w-[400px]">
                  <img src={logoWhite} alt="Logo Shortlify" className="w-[200px]"/>  
                  <p className="text-lg mt-2 text-slate-600 font-medium">
                    Shortlify é um encurtador de links que ajuda a criar links curtos que podem ser compartilhados e armazenados com facilidade.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <p className="mb-3">Contact o suporte</p>
                <Social />
              </div>
            </div>
            <div className="h-[10%] p-6 flex justify-center">
              <p>© {year} Shortlify, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
        {showModal && (
          <div className="flex justify-center">
            <LinkItem
              closeModal={() => setShowModal(false)}
              content={data}
              toastModal={toast}
            />
          </div>
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </main>
    </>
  );
};
