"use client";

import Box from "../common/BoxCommon";

export default function ResultBox() {
  return (
    <Box
      imageSrc="/main_3.svg"
      numberImage="/number_3.svg"
      maintext="Result"
      buttonText="결과보기"
      text='입력한 정보와 파일을 바탕으로 <br/> <strong class="font-extrabold">정확한 분석 결과와 세부 정보를 확인</strong> 하세요!'
      width="540px"
      height="250px"
    />
  );
}
