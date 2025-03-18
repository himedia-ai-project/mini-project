"use client";
// import { useState } from "react";
import Button from "../common/ButtonCommon";
interface FileData {
  url: string | null;
  file: File | null;
  upload: boolean;
}

export default function FileInfoForm({
  fileData,
  handleFileChange,
  handleFileSubmit,
}: {
  fileData: FileData;
  setFileData: (fileData: FileData) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileSubmit: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className="border-2 border-gray-300 rounded-md flex items-center justify-center"
        style={{
          width: "500px",
          height: "300px",
          backgroundColor: fileData.url ? "transparent" : "#f9f9f9",
        }}
      >
        {fileData.url ? (
          <img
            src={fileData.url}
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
        <Button
          text={fileData.upload ? "파일 다시 선택" : "파일 선택"}
          onClick={() => document.getElementById("fileInput")?.click()}
        />

        <Button text="정보 제출" onClick={handleFileSubmit} />
      </div>
    </div>
  );
}
