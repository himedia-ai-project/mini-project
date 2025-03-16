"use client";

import { useState } from "react";
import Box from "../common/BoxCommon";
import ButtonCommon from "../common/ButtonCommon";

export default function ListBox() {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Box
      imageSrc="/main_4.svg"
      numberImage="/number_4.svg"
      maintext="List"
      buttonText="리스트 보기"
      text='입력된 데이터를 분석하여 내 결과와 함께 <br/> <strong class="font-extrabold">다른 사용자들의 정보</strong>  도 확인하세요!'
      width="540px"
      height="250px"
      isExpand={isExpand}
      expandContent={
        isExpand ? (
          <div className="flex flex-col gap-2">
            <ButtonCommon
              text="리스트 닫기"
              onClick={() => setIsExpand(false)}
            />
          </div>
        ) : null
      }
      onClick={() => setIsExpand(!isExpand)}
    />
  );
}
