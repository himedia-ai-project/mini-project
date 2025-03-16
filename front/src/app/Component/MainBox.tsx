"use client";

import Image from "next/image";

export default function MainBox() {
  return (
    <>
      <div className="mt-[300px] pl-[30px] pt-[100px] pb-[60px] pr-[30px]">
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
    </>
  );
}
