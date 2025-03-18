"use client";

import { useEffect, useState } from "react";
import Button from "../common/ButtonCommon";
import axiosInstance from "../lib/axios";

interface ListFormProps {
  setExpandStates: (states: boolean[]) => void;
}

export default function ListForm({ setExpandStates }: ListFormProps) {
  const [result, setResult] = useState<any[]>([]);
  const userResults = [
    { age: "25살", object: "안녕하세요", issue: "알러지 있음" },
    { age: "30살", object: "감량중", issue: "당뇨" },
    { age: "35살", object: "운동중", issue: "저혈압" },
  ];

  useEffect(() => {
    const fetchUserResults = async () => {
      try {
        const { data } = await axiosInstance.get("/api/all");
        setResult(data);
      } catch (e) {
        console.error("오류입니다", e);
      }
    };
    fetchUserResults();
  }, []);

  return (
    <>
      <div className="w-[500px] max-w-lg mx-auto p-4">
        <h2 className="text-xl font-bold mb-3 text-black">
          다른 유저의 결과값 리스트
        </h2>

        <ul className="space-y-2">
          {userResults.map((user, index) => (
            <li
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
        <Button
          onClick={() => setExpandStates(new Array(4).fill(false))}
          text="리스트 닫기"
        />
      </div>
    </>
  );
}
