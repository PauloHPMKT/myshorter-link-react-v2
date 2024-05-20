import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardLinkItemActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const CardLinkItemAction = ({ children, ...rest }: CardLinkItemActionProps) => {
  return (
    <button
      { ...rest }
      className={twMerge("min-w-[100px] text-white bg-primary py-2 px-6 rounded-2xl text-[16px] font-semibold", rest.className)}
    >
      { children }
    </button>
  );
}