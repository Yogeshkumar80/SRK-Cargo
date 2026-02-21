"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`relative overflow-hidden z-30
      bg-background-primary text-black
      px-10 py-5
      font-black uppercase tracking-[0.2em]
      border-4 border-black
      rounded
      flex items-center justify-center gap-3
      transition-all duration-700 ease-out
      hover:bg-background-dark hover:text-white hover:border-white
      hover:scale-105
      after:absolute after:-z-10
      after:h-1 after:w-1
      after:bg-primary
      after:left-1/2 after:bottom-0
      after:-translate-x-1/2 after:translate-y-full
      after:rounded-full
      after:transition-all after:duration-700
      hover:after:scale-[300]
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
