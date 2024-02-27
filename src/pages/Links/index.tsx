import { useEffect, useState } from "react";
import { getShortenLinks, removeShortenLink } from "../../services/store-link";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { LinkItem } from "../../components/LinkItem";
import { ShortenLinkProps } from "../../types/interfaces";

export const Links = () => {
  const [showModal, setShowModal] = useState(false);
  const [myLinks, setMyLinks] = useState<ShortenLinkProps[] | null>(null);
  const [data, setData] = useState<ShortenLinkProps | null>(null);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    const links = await getShortenLinks();
    setMyLinks(links);
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
            <div>Lista vazia</div>
          )}
        </div>
        {showModal && (
          <LinkItem closeModal={() => setShowModal(false)} content={data} />
        )}
      </div>
    </div>
  );
};
