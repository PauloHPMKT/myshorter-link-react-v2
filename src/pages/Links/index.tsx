import { useEffect, useState } from "react";
import { getShortenLinks, removeShortenLink } from "../../services/store-link";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash, FiInbox } from "react-icons/fi";
import { LinkItem } from "../../components/LinkItem";
import { ShortenLinkProps } from "../../types/interfaces";

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

  return (
    <div className="bg-primary h-screen">
      <div className="max-w-[1200px] mx-auto pt-12 flex justify-center">
        <div className="w-full">
          <div className="flex flex-row">
            <Link to="/" className="mr-4">
              <FiArrowLeft size={38} color="#fff" />
            </Link>
            <h1 className="text-white font-semibold text-5xl">Meus Links</h1>
          </div>
          {isLoading ? (
            <div className="h-[70vh] flex justify-center items-center mt-8 p-12">
              <div>
                <span className="text-[20px] text-white">Carregando...</span>
              </div>
            </div>
          ) : (
            <div>
              {myLinks && myLinks.length ? (
                <ul className="flex flex-col mt-8 gap-2">
                  {myLinks.map((link) => (
                    <li
                      key={link.id}
                      className="w-[700px] flex items-center flex-row"
                    >
                      <button
                        onClick={() => handleOpenLink(link)}
                        className="
                          flex 
                          border-none 
                          w-full 
                          h-12 
                          bg-alpha 
                          rounded-md 
                          min-w-[80%] 
                          mr-4 
                          items-center 
                          px-4 
                          text-[18px] 
                          text-white"
                      >
                        <FiLink size={18} color="#fff" className="mr-4" />
                        {link.long_url}
                      </button>
                      <button
                        onClick={() => handleRemoveShortenLink(link.id)}
                        className="border-none"
                      >
                        <FiTrash size={24} color="red" />
                      </button>
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
          <LinkItem closeModal={() => setShowModal(false)} content={data} />
        )}
      </div>
    </div>
  );
};
