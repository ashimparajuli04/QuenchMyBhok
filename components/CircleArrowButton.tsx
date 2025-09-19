import React from "react";
import { motion } from "framer-motion";

interface CircleArrowButtonProps {
  className?: string;
  onClick?: () => void;
}

const CircleArrowButton: React.FC<CircleArrowButtonProps> = ({ className, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClick}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <svg
        className="w-full h-full text-yellowish transition-colors duration-300 ease-in-out hover:text-dark-purple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m12 16 4-4-4-4" />
        <path d="M8 12h8" />
      </svg>
    </motion.button>
  );
};

export default CircleArrowButton;
