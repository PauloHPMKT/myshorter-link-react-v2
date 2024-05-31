import { twMerge } from "tailwind-merge";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const BaseButton = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <button 
      { ...rest }
      className={twMerge("bg-primary text-white px-4 py-2 rounded-md border-none", rest.className)}
    >
      { children }
    </button>
  );
}
