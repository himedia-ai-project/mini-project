"use client";
import Image from "next/image";
import InfoBox from "./component/InfoBox";

export default function Home() {
  return (
    <div>
      <div className="ml-[30px] mt-[100px] mb-[60px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={190}
          height={30}
          className="mb-[20px]"
        />
        <p className="text-[20px]">
          궁금한 원재료명을 스캔하고,
          <br />
          쉽고 빠르게 정보를 확인하세요!
        </p>
      </div>
      <div>
        <InfoBox />
      </div>
    </div>
  );
}
