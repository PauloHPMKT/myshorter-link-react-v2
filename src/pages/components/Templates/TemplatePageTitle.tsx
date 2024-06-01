import { HTMLAttributes } from "react";

interface TemplatePageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export const TemplatePageTitle = ({ children, ...rest }: TemplatePageTitleProps) => {
  return (
    <h1 { ...rest } className="text-3xl font-bold">{ children }</h1>
  );
}