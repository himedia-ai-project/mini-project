"use client";

import { useState } from "react";
import Box from "../common/BoxCommon";
import ButtonCommon from "../common/ButtonCommon";

export default function FileBox() {
  const [isExpand, setIsExpand] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [upload, setUpload] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setUpload(false);

      if (selectedFile.type.startsWith("image/")) {
        const objectUrl = URL.createObjectURL(selectedFile);
        setUrl(objectUrl);
      } else {
        setUrl(null);
      }
    }
  };

  const handleFileSubmit = () => {
    if (!file) {
      alert("파일을 업로드해야 합니다!");
      return;
    }
    setIsExpand(false);
    setFile(null);
    setUrl(null);
    setUpload(false);
  };

  return (
    <>
      <Box
        imageSrc="/main_2.svg"
        numberImage="/number_2.svg"
        maintext="File"
        buttonText={isExpand ? "닫기" : "파일 업로드"}
        text='업로드한 파일을 통해 <strong class="font-extrabold">원재료 성분을 분석하고,</strong> <strong class="font-extrabold">특성을 자세히</strong> 알아볼 수 있어요!'
        width="540px"
        height={isExpand ? "400px" : "250px"}
        isExpand={isExpand}
        expandContent={
          isExpand ? (
            <div className="flex flex-col gap-2 items-center">
              <div
                className="border-2 border-gray-300 rounded-md flex items-center justify-center"
                style={{
                  width: "500px",
                  height: "300px",
                  backgroundColor: url ? "transparent" : "#f9f9f9",
                }}
              >
                {url ? (
                  <img
                    src={url}
                    alt="미리보기"
                    className="rounded-md border p-1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <p className="text-gray-500">미리보기 없음</p>
                )}
              </div>

              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex gap-[5px]">
                <ButtonCommon
                  text={upload ? "파일 다시 선택" : "파일 선택"}
                  onClick={() => document.getElementById("fileInput")?.click()}
                />

                <ButtonCommon text="파일 업로드" onClick={handleFileSubmit} />
              </div>
            </div>
          ) : null
        }
        onClick={() => setIsExpand(!isExpand)}
      />
    </>
  );
}
