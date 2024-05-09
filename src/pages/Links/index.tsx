import { useEffect, useState } from "react";
import { getShortenLinks, removeShortenLink } from "../../services/store-link";
import { FiLink, FiTrash, FiInbox, FiClipboard, FiCalendar, FiArrowDown } from "react-icons/fi";
import { LinkItem } from "../../components/LinkItem";
import { ShortenLinkProps } from "../../types/interfaces";
import { FaSortAmountDown } from "react-icons/fa";

export const Links = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myLinks, setMyLinks] = useState<ShortenLinkProps[] | null>(null);
  const [data, setData] = useState<ShortenLinkProps | null>(null);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    setIsLoading(true);
    const links = await getShortenLinks();
    setMyLinks(links);
    setIsLoading(false);
  };

  const handleOpenLink = (link: ShortenLinkProps) => {
    setData(link);
    setShowModal(true);
  };

  const handleRemoveShortenLink = (id: string) => {
    removeShortenLink(id);
    getLinks();
  };

  const formatLink = (link: string) => {
    const regex = /(https|http):\/\//;
    return link.replace(regex, '');
  }

  return (
    <div className="min-h-[90vh]">
      <div className="flex justify-between w-full">
        <div className="pb-11 border-slate-100">
          <h1 className="text-3xl font-bold">Meus Links</h1>
        </div>
        <div className="flex gap-3 h-12">
          <div className="bg-white flex items-center w-auto p-4 rounded-md border-2">
            <FiCalendar size={18} color="#4b5963" className="mr-[4px]" />
            Filtrar por: Data de criação
          </div>
          <div className="bg-white flex items-center w-auto p-4 rounded-md border-2">
            <FaSortAmountDown size={18} color="#4b5963" className="mr-[4px]" />
            Ordenar
          </div>
          <div className="bg-white flex items-center w-auto p-4 rounded-md border-2">
            <FiArrowDown size={18} color="#4b5963" className="mr-[4px]" />
            Active
          </div>
        </div>
      </div>
      <div className="w-full">
        {isLoading ? (
          <div className="flex justify-center items-center mt-8 p-12">
            <div>
              <span className="text-[20px]">Carregando...</span>
            </div>
          </div>
        ) : (
          <div>
            {myLinks && myLinks.length ? (
              <ul className="flex flex-col gap-4">
                {myLinks.map((link) => (
                  <li
                    key={link.id}
                    className="w-full bg-white p-4 flex rounded-md"
                  >
                    <div className="w-[70%]">
                      <div className="flex items-center">
                        <FiLink size={20} className="mr-4" />
                        <h3 className="text-2xl font-semibold mb-2">Titulo</h3>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col">
                          <a href={link.link} className="font-semibold mb-2 text-slate-500 hover:text-primary">
                            {formatLink(link.link)}
                          </a>
                          <p
                            className="
                              h-12 
                              text-[16x]"
                          >
                            {link.long_url}
                          </p>
                          <span className="flex items-center text-gray-600">
                            <FiCalendar size={18} color="#4b5963" className="mr-[4px]" />
                            Criado em 09/05/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[30%] justify-end">
                      <div className="flex h-9 gap-3">
                        <button 
                          onClick={() => handleOpenLink(link)}
                          className="flex items-center bg-gray-300 px-[5px] h-8  rounded-md"
                        >
                          <FiClipboard size={16} color="#000" className="mr-2" />
                          Copiar
                        </button>
                        <button
                          onClick={() => handleRemoveShortenLink(link.id)}
                          className="border-none"
                        >
                          <FiTrash size={24} color="red" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-[70vh] flex justify-center items-center mt-8 p-12">
                <div>
                  <FiInbox size={150} color="#fff" />
                  <span className="text-[20px] text-white">
                    Sua lista está vazia...
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  );
};
