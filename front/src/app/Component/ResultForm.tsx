"use client";

import { useState } from "react";
import Button from "../common/ButtonCommon";

interface ResultFormProps {
  fileData: any;
  toggleExpand: () => void;
}

export default function ResultForm({
  fileData,
  toggleExpand,
}: ResultFormProps) {
  const [result, setResult] = useState(null);

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
    <div className="w-[500px] ">
      {/* 이미지 부분 */}
      <div className="mb-4 p-4 border rounded-md bg-gray-50 shadow-sm">
        <h2 className="text-lg font-bold text-black mb-2">입력한 정보</h2>
        {/* <p className="text-black">저장된 내용 텍스트</p> */}
        <div className="overflow-hidden mt-2 w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-md">
          <span className="text-gray-500">
            {fileData?.url && (
              <img
                src={fileData?.url}
                alt="미리보기"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </span>
        </div>
      </div>
      {/* 결과 텍스트 부분 */}
      <div>

      <div className="flex justify-center items-center mt-4">
        <Button onClick={toggleExpand} text="결과 닫기" />
      </div>
    </div>
  );
}
