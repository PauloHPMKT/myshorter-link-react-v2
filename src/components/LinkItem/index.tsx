import { FiClipboard, FiX } from "react-icons/fi";
import { ShortenLinkProps } from "../../types/interfaces";
import { useStyle } from "../../hooks/useStyles";
import { saveShortenLink } from "../../services/store-link";

export interface LinkItemProps {
  closeModal: () => void;
  content: ShortenLinkProps | null;
}

export const LinkItem = ({ closeModal, content }: LinkItemProps) => {
  const classes = useStyle();
  const { long_url, link } = content || {};

  const copyLink = async () => {
    const { clipboard } = navigator;
    await clipboard.writeText(link as string);
    alert("Link copiado com sucesso!");
  };

  const saveURL = () => {
    saveShortenLink(content as ShortenLinkProps);
    alert("Seu link foi salvo com sucesso!!!");
    closeModal();
  };

  return (
    <div
      className={`absolute bottom-16 bg-white shadow-md p-4 w-[700px] rounded-md flex flex-col ${classes["animation-slideup"]}`}
    >
      <div className="flex items-center justify-between">
        <h2>Link encurtado</h2>
        <button
          onClick={closeModal}
          className="border-none bg-transparent cursor-pointer"
        >
          <FiX size={24} color="#000" />
        </button>
      </div>
      <span className="my-4 text-slate-600 text-[16px]">{long_url}</span>
      <button
        onClick={copyLink}
        className="bg-secondary text-white flex justify-between items-center px-4 border-none h-9 rounded-md cursor-pointer"
      >
        {link}
        <FiClipboard size={28} color="#fff" />
      </button>
      <footer className="mt-4">
        <div className="flex justify-center gap-2 w-full">
          <button
            onClick={saveURL}
            className="min-w-[100px] border-stone-600 border"
          >
            Salvar URL
          </button>
          <button className="min-w-[100px] border-stone-600 border">
            Cancelar
          </button>
        </div>
      </footer>
    </div>
  );
};
