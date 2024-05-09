import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiClipboard, FiX } from "react-icons/fi";
import { useStyle } from "../../hooks/useStyles";
import { saveShortenLink } from "../../services/store-link";
import { ShortenLinkProps } from "../../types/interfaces";
import { useToastify } from "../../hooks/useToastify";

export interface LinkItemProps {
  closeModal: () => void;
  content: ShortenLinkProps | null;
}

export const LinkItem = ({
  closeModal,
  content,
}: LinkItemProps) => {
  const classes = useStyle();
  const { pathname } = useLocation();
  const { long_url, link } = content || {};
  const [buttons, setButtons] = useState(true);

  useEffect(() => {
    if (pathname === "/app/links") setButtons(false);
  }, []);

  const copyLink = async () => {
    const { clipboard } = navigator;
    await clipboard.writeText(link as string);
    useToastify("success", "Link copiado com sucesso!");
  };

  const saveURL = () => {
    saveShortenLink(content as ShortenLinkProps);
    useToastify("success", "Seu link foi salvo com sucesso!!!");
    closeModal();
  };

  return (
    <>
      <div
        className={`fixed bottom-16 bg-white shadow-md p-4 w-[700px] rounded-2xl flex flex-col ${classes["animation-slideup"]}`}
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
          className="bg-secondary text-white flex justify-between items-center px-4 border-none h-12 rounded-md cursor-pointer"
        >
          {link}
          <FiClipboard size={28} color="#fff" />
        </button>
        <footer className="mt-4">
          {buttons && (
            <div className="flex justify-center gap-2 w-full">
              <button
                onClick={saveURL}
                className="min-w-[100px] text-white bg-primary py-2 px-6 rounded-2xl text-[16px] font-semibold"
              >
                Salvar URL
              </button>
              <button
                onClick={closeModal}
                className="min-w-[100px] border-slate-400 border py-2 px-6 rounded-2xl font-semibold"
              >
                Cancelar
              </button>
            </div>
          )}
        </footer>
      </div>
    </>
  );
};
