import React from "react";
      
      interface GradientButtonProps {
        label?: string;
        onClick?: () => void;
      }
      
      export default function GradientButton({
        label = "Click",
        onClick,
      }: GradientButtonProps) {
        return (
          <button
            onClick={onClick}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
          >
            {label}
          </button>
        );
      }