"use client";

import Image from "next/image";

export default function MainBox() {
  return (
    <>
      <div className="pl-[30px] pt-[30px] pr-[30px] flex justify-between items-center">
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={190}
            height={30}
            className="mb-[20px]"
          />
          <p className="text-[20px] text-black">
            궁금한 원재료명을 스캔하고,
            <br />
            쉽고 빠르게 정보를 확인하세요!
          </p>
        </div>
        <Image src="/mainBox.svg" alt="mainImage" width={270} height={270} />
      </div>
    </>
  );
}
