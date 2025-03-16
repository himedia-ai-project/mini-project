"use client";
import FileBox from "./component/FileBox";
import InfoBox from "./component/InfoBox";
import ListBox from "./component/ListBox";
import MainBox from "./component/MainBox";
import ResultBox from "./component/ResultBox";

export default function Home() {
  return (
    <div>
      <MainBox />
      <div>
        <InfoBox />
        <FileBox />
        <ResultBox />
        <ListBox />
      </div>
    </div>
  );
}
