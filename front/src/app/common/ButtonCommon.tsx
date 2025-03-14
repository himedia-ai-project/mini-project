export default function Button({ text, onClick }: { text: string; onClick: () => void }) {
    return (
      <button
        className="w-[120px] h-[40px] rounded-md bg-[#3658C1] text-sm text-white cursor-pointer flex justify-center items-center"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  