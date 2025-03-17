"use client";

import { useEffect, useState } from "react";
import Button from "../common/ButtonCommon";
import axiosInstance from "../lib/axios";

export default function ResultForm() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const { data } = await axiosInstance.get("/api/result");
        setResult(data);
      } catch (error) {
        console.error("결과 데이터를 불러오는데 실패했습니다.", error);
      }
    };

    fetchResult();
  }, []);

  return (
    <div className="w-[500px]">
      <div className="mb-4 p-4 border rounded-md bg-gray-50 shadow-sm">
        <h2 className="text-lg font-bold text-black mb-2">입력한 정보</h2>
        <p className="text-black">저장된 내용 텍스트</p>
        <div className="mt-2 w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-md">
          <span className="text-gray-500">저장된 이미지</span>
        </div>
      </div>
      <div>
        <p className="text-black font-bold">
          00님의 데이터를 기반으로 나온 결과입니다.
        </p>
      </div>
      <div className="p-4 border rounded-md bg-gray-50 shadow-sm h-[400px] flex ">
        {/*결과값 불러오기*/}
        {result ? (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        ) : (
          <p>로딩 중...</p>
        )}
        {/* <p className="text-black">
          결과 텍스트 보여주기
          <br />
          <br />
          1.(나이와 목적 특이사항)기반으로 업로드한 파일에서 안맞는 top3 성분
          <br />
          2.(나이와 목적 특이사항)기반으로 업로드한 파일에서 맞는 top3 성분
          <br />
          3.전체적인 결과
        </p> */}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Button text="결과 닫기" />
      </div>
    </div>
  );
}
