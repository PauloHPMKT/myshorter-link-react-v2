import { FiClipboard, FiX } from "react-icons/fi";
import { ShortenLinkProps } from "../../types/interfaces";
import { useStyle } from "../../hooks/useStyles";
import { saveShortenLink } from "../../services/store-link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export interface LinkItemProps {
  closeModal: () => void;
  content: ShortenLinkProps | null;
  toastModal: any | null;
}

export const LinkItem = ({
  closeModal,
  content,
  toastModal,
}: LinkItemProps) => {
  const classes = useStyle();
  const { pathname } = useLocation();
  const { long_url, link } = content || {};
  const [buttons, setButtons] = useState(true);

  useEffect(() => {
    if (pathname === "/links") setButtons(false);
  }, []);

  const copyLink = async () => {
    const { clipboard } = navigator;
    await clipboard.writeText(link as string);
    toastModal.success("Link copiado com sucesso!");
  };

  const saveURL = () => {
    saveShortenLink(content as ShortenLinkProps);
    toastModal.success("Seu link foi salvo com sucesso!!!");
    closeModal();
  };

  return (
    <>
      <div
        className={`fixed bottom-16 bg-white shadow-md p-4 w-[700px] rounded-md flex flex-col ${classes["animation-slideup"]}`}
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
          {buttons && (
            <div className="flex justify-center gap-2 w-full">
              <button
                onClick={saveURL}
                className="min-w-[100px] text-white bg-primary py-2 px-6 rounded-md text-[16px] font-semibold"
              >
                Salvar URL
              </button>
              <button
                onClick={closeModal}
                className="min-w-[100px] border-slate-400 border py-2 px-6 rounded-md font-semibold"
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
