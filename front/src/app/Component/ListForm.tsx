"use client";

import { useEffect, useState } from "react";
import Button from "../common/ButtonCommon";
import axiosInstance from "../lib/axios";
import ModalCommon from "../common/ModalCommon";

interface ListFormProps {
  toggleExpand: () => void;
}

export default function ListForm({ toggleExpand }: ListFormProps) {
  const [result, setResult] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userResults = [
    { age: "25살", object: "안녕하세요", issue: "알러지 있음" },
    { age: "30살", object: "감량중", issue: "당뇨" },
    { age: "35살", object: "운동중", issue: "저혈압" },
  ];

  // useEffect(() => {
  //   const fetchUserResults = async () => {
  //     try {
  //       const { data } = await axiosInstance.get("/api/all");
  //       setResult(data);
  //     } catch (e) {
  //       console.error("오류입니다", e);
  //     }
  //   };
  //   fetchUserResults();
  // }, []);

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

  const userResultsWithMock = [
    {
      age: "25살",
      object: "안녕하세요",
      issue: "알러지 있음",
      results: [
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
      ],
    },
    {
      age: "30살",
      object: "감량중",
      issue: "당뇨",
      results: [
        {
          id: 19,
          description: "설탕: 혈당 급상승 유발`나트륨: 고혈압 위험 증가",
          type: "BAD",
        },
        {
          id: 20,
          description:
            "올리브유: 심혈관 건강에 좋음`고구마: 천천히 흡수되는 탄수화물",
          type: "GOOD",
        },
        {
          id: 21,
          description:
            "당뇨가 있는 사용자는 혈당을 조절해야 하므로 섭취에 주의해야 합니다.",
          type: "RESULT",
        },
      ],
    },
    {
      age: "35살",
      object: "운동중",
      issue: "저혈압",
      results: [
        {
          id: 22,
          description: "소금: 혈압 상승 유발`튀김류: 지방 과다 섭취 위험",
          type: "BAD",
        },
        {
          id: 23,
          description: "연어: 오메가3 공급`두부: 식물성 단백질 공급",
          type: "GOOD",
        },
        {
          id: 24,
          description:
            "저혈압이 있는 사용자는 나트륨 섭취를 적절히 조절하는 것이 중요합니다.",
          type: "RESULT",
        },
      ],
    },
  ];

  const handleModalOpen = (user: any) => {
    setIsModalOpen(true);
    setResult(user);
  };
  return (
    <>
      <div className="w-[500px] max-w-lg mx-auto p-4">
        <h2 className="text-xl font-bold mb-3 text-black">
          다른 유저의 결과값 리스트
        </h2>

        <ul className="space-y-2">
          {userResultsWithMock.map((user, index) => (
            <li
              onClick={() => handleModalOpen(user.results)}
              key={`user-${index}`}
              className="border p-1 rounded-md shadow-sm bg-white transition"
            >
              <button className="block text-black hover:text-blue-600 w-full text-left pl-[10px] text-[14px]">
                나이: {user.age} | 목적: {user.object} | 특이사항: {user.issue}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center mt-[10px]">
        <Button onClick={toggleExpand} text="리스트 닫기" />
      </div>

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <ModalCommon
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userResults={result}
        />
      )}
    </>
  );
}
