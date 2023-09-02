"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex
        justify-center
        rounded-lg
        px-3
        py-2
        text-white
        focus-visible: outline
        focus-visible: outline-2
        focus-visible: outline-offset-2
    `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        danger
          ? "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"
          : "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
