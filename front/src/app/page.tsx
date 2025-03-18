"use client";

import BoxWrap from "./Component/BoxWrap";
import MainBox from "./Component/MainBox";

export default function Home() {
  return (
    <div>
      <MainBox />
      <div>
        {/* <InfoBox /> */}
        {/* <FileBox /> */}
        {/* <ResultBox /> */}
        {/* <ListBox /> */}
        <BoxWrap />
      </div>
    </div>
  );
}
