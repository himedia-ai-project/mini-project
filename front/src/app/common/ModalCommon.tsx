"use client";

interface UserResult {
  age: string;
  object: string;
  issue: string;
  results: {
    id: number;
    description: string;
    type: string;
  }[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedUser: UserResult | null;
}

export default function ModalCommon({
  isOpen,
  onClose,
  selectedUser,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">유저 상세 정보</h2>

        <div>
          <p className="text-black">🔹 나이: {selectedUser?.age}</p>
          <p className="text-black">🔹 목적: {selectedUser?.object}</p>
          <p className="text-black">🔹 특이사항: {selectedUser?.issue}</p>
        </div>

        {selectedUser?.results.map((item) => (
          <div key={item.id} className="mb-6 p-4 border rounded-lg shadow-sm">
            <h3
              className={`text-lg font-semibold ${
                item.type === "BAD"
                  ? "text-red-500"
                  : item.type === "GOOD"
                  ? "text-green-500"
                  : "text-blue-500"
              }`}
            >
              {item.type}
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {item.description.split("`").map((desc, index) => (
                <li key={index} className="text-gray-700">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600 cursor-pointer"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
