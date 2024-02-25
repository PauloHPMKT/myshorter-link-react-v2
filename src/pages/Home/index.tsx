import { FiLink } from "react-icons/fi";
import { useStyle } from "../../hooks/useStyles";
import { MainHeader } from "../../components/Header";
import { useState } from "react";
import linksService from "../../services/links.service";
import { ShortenLinkProps } from "../../types/interfaces";
import { LinkItem } from "../../components/LinkItem";

export const Home = () => {
  const classes = useStyle();
  const [url, setUrl] = useState("");
  const [data, setData] = useState<ShortenLinkProps | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShortenLink = async () => {
    try {
      const { data } = await linksService.generateShortenLink(url);

      setData(data);
      setShowModal(true);
      setUrl("");
    } catch (error) {
      alert("Ops deu erro!");
    }
  };

  return (
    <div className="w-full h-screen bg-primary flex items-center justify-center flex-col">
      <MainHeader />
      <div className="flex flex-col items-center">
        <div className="bg-white p-3 rounded-[100%] w-36 h-36 flex justify-center items-center">
          <FiLink size={58} />
        </div>
        <h1 className="text-white text-4xl font-semibold">My Shorter Link</h1>
        <span className="text-white mt-4 mb-9 text-[19px]">
          Cole a url ou link para encurtar
        </span>
      </div>
      <div
        className={`w-[540px] flex flex-col items-center ${classes["animation-slideup"]}`}
      >
        <div className="w-full h-12 bg-alpha flex justify-center items-center rounded-md">
          <FiLink size={24} color="#fff" className="mx-2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Cole aqui sua URL!"
            className="w-full h-full text-white bg-transparent border-none outline-none placeholder-alpha-2 text-[19px] "
          />
        </div>
        <button
          onClick={handleShortenLink}
          className="
            w-full 
            h-12 
            border-none 
            rounded-md 
            text-gray-950 
            text-[16px] 
            font-bold 
            mt-2 
            cursor-pointer 
            bg-slate-200 
            hover:scale-x-105 
            transition-transform 
            duration-700"
        >
          Encurtar URL
        </button>
      </div>

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
};
