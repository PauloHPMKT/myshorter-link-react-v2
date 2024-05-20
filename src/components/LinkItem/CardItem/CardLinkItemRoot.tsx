import { ReactNode } from "react";
import { useStyle } from "../../../hooks/useStyles";

interface CardLinkItemRootProps {
  children: ReactNode;
}

export const CardLinkItemRoot = ({ children }: CardLinkItemRootProps) => {
  const classes = useStyle();
  return (
    <div
      className={`fixed bottom-16 bg-white shadow-md p-4 w-[700px] rounded-2xl flex flex-col ${classes["animation-slideup"]}`}
    >
      { children }
    </div>
  );
}
