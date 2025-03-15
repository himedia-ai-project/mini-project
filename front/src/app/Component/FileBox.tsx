"use client";

import Box from "../common/BoxCommon";

export default function FileBox() {
  return (
    <Box
      imageSrc="/main_2.svg"
      numberImage="/number_2.svg"
      maintext="File"
      buttonText="파일 업로드"
      text='가지고 있는 <strong class="font-extrabold">파일을 업로드</strong>하여<br/> <strong class="font-extrabold">원재료에 대해 자세히 확인</strong>할 수 있어요!'
      width="540px"
      height="250px"
    />
  );
}
