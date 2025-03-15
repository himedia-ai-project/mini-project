"use client";
import Image from "next/image";
import FileBox from "./component/FileBox";
import InfoBox from "./component/InfoBox";
import ListBox from "./component/ListBox";
import ResultBox from "./component/ResultBox";

export default function Home() {
  return (
    <div>
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
      <div>
        <InfoBox />
        <FileBox />
        <ResultBox />
        <ListBox />
      </div>
    </div>
  );
}
