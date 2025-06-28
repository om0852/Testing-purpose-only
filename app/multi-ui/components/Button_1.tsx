import React from "react";

interface AnimatedButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional for additional styling
  disabled?: boolean;
}

const Button1: React.FC<AnimatedButtonProps> = ({
  label,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-3 font-medium text-white rounded-full transition-all duration-300 shadow-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 active:scale-95 focus:outline-none ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-105 animate-bounce"
      } ${className}`}
    >
      <span className="absolute inset-0 transition-transform duration-300 scale-110 opacity-0 bg-white rounded-full mix-blend-overlay hover:opacity-20"></span>
      {label}
    </button>
  );
};

export default Button1;