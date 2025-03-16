"use client";

import { useState } from "react";
import Box from "../common/BoxCommon";
import ButtonCommon from "../common/ButtonCommon";
import InputCommon from "../common/InputCommon";

export default function InfoBox() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [object, setObject] = useState("");
  const [issue, setIssue] = useState("");
  const [isExpand, setIsExpand] = useState(false);

  const input = [
    {
      label: "이름",
      value: name,
      placeholder: "이름을 입력해주세요 (ex 홍길동 or 길동)",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
    },
    {
      label: "나이",
      value: age,
      placeholder: "나이을 입력해주세요 (ex 25살)",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAge(e.target.value),
    },
    {
      label: "성별",
      value: gender,
      placeholder: "성별을 입력해주세요 (ex 여자 or 여)",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setGender(e.target.value),
    },
    {
      label: "목적",
      value: object,
      placeholder: "목적을 입력해주세요 (ex 감량중입니다)",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setObject(e.target.value),
    },
    {
      label: "특이사항",
      value: issue,
      placeholder: "특이사항을 입력해주세요 (ex 새우알러지 or 병명)",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setIssue(e.target.value),
    },
  ];

  return (
    <>
      <Box
        imageSrc="/main_1.svg"
        numberImage="/number_1.svg"
        maintext="Info"
        buttonText={isExpand ? "닫기" : "정보 입력하기"}
        text='내 정보를 입력하면 <strong class="font-extrabold">더 정확한 정보를 얻고,<br/>그에 맞는 정보를 자세히</strong> 알아볼 수 있어요!'
        width="540px"
        height="250px"
        isExpand={isExpand}
        expandContent={
          isExpand ? (
            <div className="flex flex-col gap-2">
              {input.map((field, index) => (
                <InputCommon key={index} {...field} sx={{ mb: 2 }} />
              ))}
              <ButtonCommon
                text="정보 제출하기"
                onClick={() => setIsExpand(false)}
              />
            </div>
          ) : null
        }
        onClick={() => setIsExpand(!isExpand)}
      />
    </>
  );
}
