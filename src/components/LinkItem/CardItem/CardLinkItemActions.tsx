import { ReactNode } from "react";

interface CardItemLinkActionsProps {
  children: ReactNode;
}

export const CardLinkItemActions = ({ children }: CardItemLinkActionsProps) => {
  return (
    <div className="flex justify-center gap-2 w-full">
      { children }
    </div>
  );
}
