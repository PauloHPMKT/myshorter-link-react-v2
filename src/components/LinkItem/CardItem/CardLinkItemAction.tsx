import { ButtonHTMLAttributes, ReactNode } from "react";
import { BaseButton } from "../../Buttons/BaseButton";

interface CardLinkItemActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const CardLinkItemAction = ({ children, ...rest }: CardLinkItemActionProps) => {
  return (
    <BaseButton { ...rest }>
      { children }
    </BaseButton>
  );
}