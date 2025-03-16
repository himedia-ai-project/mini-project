"use client";

import BoxWrap from "./component/BoxWrap";
import MainBox from "./component/MainBox";

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
