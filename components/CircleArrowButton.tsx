'use client';

interface SvgButtonProps {
  onClick?: () => void;
}

export default function SvgButton({ onClick }: SvgButtonProps) {
  return (
    <div
      onClick={onClick}
      className="text-[#EAFFD0] inline-block cursor-pointer transition-transform duration-200 transform hover:scale-110 hover:text-dark-purple w-24 h-24"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full block"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m12 16 4-4-4-4" />
        <path d="M8 12h8" />
      </svg>
    </div>
  );
}
