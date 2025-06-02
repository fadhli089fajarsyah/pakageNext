"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const ButtonCustom: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const baseStyle = `px-4 py-2 rounded text-white font-semibold`;
  const variantStyle =
    variant === "primary"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
