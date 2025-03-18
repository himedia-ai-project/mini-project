interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  text,
  onClick,
  disabled,
  className,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer w-[120px] h-[40px]px-4 py-2 rounded-[10px] transition-all duration-200 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#3658C1] text-white hover:bg-[#4767CB]"
      } ${className || ""}`}
    >
      {text}
    </button>
  );
}
