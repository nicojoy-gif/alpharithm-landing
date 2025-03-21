import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium bg-white text-dark-300 rounded-sm hover:bg-blue-700 hover:text-white transition 
      active:scale-95 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md md:shadow-lg ${className}`}
  >
    {children}
  </button>
);
