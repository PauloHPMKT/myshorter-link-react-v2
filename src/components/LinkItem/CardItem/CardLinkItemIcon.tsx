import { ElementType } from "react";
import { IconBaseProps } from "react-icons";

interface CardItemIconProps extends IconBaseProps {
  icon: ElementType;
  className?: string;
}

export const CardLinkItemIcon = ({ icon: Icon, className, ...rest }: CardItemIconProps) => {
  return (
    <Icon
      { ...rest } 
      size={24} 
      className={className} 
    />
  );
}
