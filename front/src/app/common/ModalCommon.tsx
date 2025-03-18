"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userResults: { age: string; object: string; issue: string }[];
}

export default function ModalCommon({
  isOpen,
  onClose,
  userResults,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">유저 상세 정보</h2>
        <p className="text-black">🔹 나이: {}</p>
        <p className="text-black">🔹 목적: {}</p>
        <p className="text-black">🔹 특이사항: {}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
