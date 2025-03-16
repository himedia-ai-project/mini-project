"use client";

import { useState } from "react";
import Box from "../common/BoxCommon";
import UserInfoForm from "./UserInfoForm";

export default function InfoBox() {
  const [isExpand, setIsExpand] = useState(false);

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
        expandContent={isExpand ? <UserInfoForm /> : null}
        onClick={() => setIsExpand(!isExpand)}
      />
    </>
  );
}
