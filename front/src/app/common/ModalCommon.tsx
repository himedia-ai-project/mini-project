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
  const mockResult = [
    {
      id: 16,
      description:
        "포도당: 혈당 상승 유발`팜올레인유: 포화지방산 과다`식염: 나트륨 과다 섭취 위험",
      type: "BAD",
    },
    {
      id: 17,
      description:
        "해바라기유: 불포화지방산 공급`냉동 감자칩: 탄수화물 에너지 공급 (다만 섭취량 조절 필요)`페퍼솔트 씨즈닝: 소량의 나트륨과 향신료 공급 (과다 섭취 주의)",
      type: "GOOD",
    },
    {
      id: 18,
      description:
        "김영님은 당뇨병 환자이므로 해당 제품은 혈당 조절, 체중 관리 모두에 좋지 않은 영향을 미칠 수 있어 섭취를 지양하는 것이 좋습니다. 특히 포도당과 나트륨 함량이 높아 더욱 주의해야 합니다.",
      type: "RESULT",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">유저 상세 정보</h2>

        <div>
          <p className="text-black">🔹 나이: {selectedUser?.age}</p>
          <p className="text-black">🔹 목적: {selectedUser?.object}</p>
          <p className="text-black">🔹 특이사항: {selectedUser?.issue}</p>
        </div>

        {mockResult.map((item) => (
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
