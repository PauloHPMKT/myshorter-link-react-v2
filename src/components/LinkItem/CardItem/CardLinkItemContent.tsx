import { ReactNode } from "react";

interface CardLinkItemProps {
  title: string;
  longUrl: string | undefined;
  children: ReactNode;
}

export const CardLinkItemContent = ({ title, children, longUrl }: CardLinkItemProps) => {
  return (
    <div className="flex flex-col">
      <h2>{ title }</h2>
      <span>{longUrl}</span>
      <div className="bg-secondary text-white flex justify-between items-center my-4 p-4 border-none h-12 rounded-md cursor-pointer">
        { children }
      </div>
    </div>
  );
}
