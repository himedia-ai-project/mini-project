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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handelObjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObject(e.target.value);
  };

  const handleIssueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssue(e.target.value);
  };

  const input = [
    {
      label: "이름",
      placeholder: "이름을 입력하세요(ex 홍길동 or 길동)",
      value: name,
      onChange: handleNameChange,
    },
    {
      label: "나이",
      placeholder: "나이를 입력하세요(ex 25살 or 25)",
      value: age,
      onChange: handleAgeChange,
    },
    {
      label: "성별",
      placeholder: "성별를 입력하세요(ex 여자 or 남자)",
      value: gender,
      onChange: handleGenderChange,
    },
    {
      label: "목적",
      placeholder: "목적를 입력하세요(ex 운동으로 감량중)",
      value: object,
      onChange: handelObjectChange,
    },
    {
      label: "특이사항",
      placeholder: "특이사항을 입력하세요(ex 알러지 or 질병 or 없음)",
      value: issue,
      onChange: handleIssueChange,
    },
  ];

  return (
    <>
      <Box
        imageSrc="/main_1.svg"
        numberImage="/number_1.svg"
        maintext="Info"
        buttonText="정보 입력하기"
        text='내 정보를 입력하면 <strong class="font-extrabold">더 정확한 정보를 얻고,<br/>그에 맞는 정보를 자세히</strong> 알아볼 수 있어요!'
        width="540px"
        height="250px"
        expandContent={
          <div className="flex flex-col items-start gap-2">
            {input.map((input, index) => (
              <InputCommon key={index} sx={{ mb: 2 }} {...input} />
            ))}
            <ButtonCommon text="정보 입력하기" />
          </div>
        }
      />
    </>
  );
}
