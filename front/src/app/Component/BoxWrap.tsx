"use client";

import { useState } from "react";
import Box from "../common/BoxCommon";
import axiosInstance from "../lib/axios";
import UserInfoForm from "./UserInfoForm";
import FileInfoForm from "./FileInfoForm";
import ResultForm from "./ResultForm";
import ListForm from "./ListForm";

interface FileInfoFormProps {
  fileData: {
    url: string | null;
    file: File | null;
    upload: boolean;
  };
  setFileData: React.Dispatch<
    React.SetStateAction<{
      url: string | null;
      file: File | null;
      upload: boolean;
    }>
  >;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileSubmit: () => void;
}

export default function BoxWrap() {
  // 4개의 박스를 기본으로 시작, 필요에 따라 확장
  const [expandStates, setExpandStates] = useState(new Array(4).fill(false));

  // 정보 입력 박스 데이터
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    object: "",
    issue: "",
    image: null as File | null,
  });

  // 파일 업로드 박스 데이터
  const [fileData, setFileData] = useState({
    file: null as File | null,
    url: null as string | null,
    upload: false,
  });

  // 파일 업로드 박스 데이터 변경 함수.
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileData({
        ...fileData,
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
        upload: true,
      });
    }
  };

  // 파일 업로드 박스 데이터 제출 함수
  const handleFileSubmit = () => {
    if (!fileData.file) {
      alert("파일을 업로드해야 합니다!");
      return;
    }
    setFileData({
      ...fileData,
      upload: false,
    });
  };

  // 박스 클릭 시 해당 박스의 상태를 토글하는 함수
  const toggleExpand = (index: number) => {
    setExpandStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index]; // 클릭된 박스만 상태를 반전시킴
      return newStates;
    });
  };

  //데이터 전송 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fileData + "안녕하세요");
    try {
      // 호출하기
      // FormData 객체 생성
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("goal", formData.object);
      formDataToSend.append("health_conditions", formData.issue);
      formDataToSend.append("image", fileData.file as Blob);

      // 파일 업로드 요청
      const { data } = await axiosInstance.post("/api/user", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);

      // 파일 데이터 초기화
      // setFileData({
      //   url: null,
      //   file: null,
      //   upload: false,
      // });

      alert("정보가 성공적으로 제출되었습니다!");
    } catch (error) {
      console.error("제출 실패:", error);
      alert("데이터 제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const boxData = [
    {
      imageSrc: "/main_1.svg",
      numberImage: "/number_1.svg",
      maintext: "Info",
      buttonText: "정보 입력하기",
      text: '내 정보를 입력하면 <strong class="font-extrabold">더 정확한 정보를 얻고,<br/>그에 맞는 정보를 자세히</strong> 알아볼 수 있어요!',
      width: "540px",
      height: "250px",
      expandContent: (
        <UserInfoForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      imageSrc: "/main_2.svg",
      numberImage: "/number_2.svg",
      maintext: "Details",
      buttonText: "파일 업로드",
      text: '저장되어있는 파일을 업로드하면,<br/><strong class="font-extrabold">정보와 맞는 맞춤형 결과</strong>를 얻을 수 있습니다.',
      width: "540px",
      height: "250px",
      expandContent: (
        <FileInfoForm
          fileData={fileData}
          setFileData={setFileData}
          handleFileChange={handleFileChange}
          handleFileSubmit={handleFileSubmit}
        />
      ),
    },
    {
      imageSrc: "/main_3.svg",
      numberImage: "/number_3.svg",
      maintext: "Result",
      buttonText: "결과 보기",
      text: '입력된 데이터를 분석하여 내 정보와 맞는 <br/><strong class="font-extrabold">성분 결과와 전체적인 결과</strong>를 확인하세요!',
      width: "540px",
      height: "250px",
      expandContent: (
        <ResultForm fileData={fileData} toggleExpand={() => toggleExpand(2)} />
      ),
    },
    {
      imageSrc: "/main_4.svg",
      numberImage: "/number_4.svg",
      maintext: "List",
      buttonText: "리스트 보기",
      text: '입력된 데이터를 분석하여 내 결과와 함께 <strong class="font-extrabold"><br/>다른 사용자들의 결과정보</strong>  도 확인하세요!',
      width: "540px",
      height: "250px",
      expandContent: <ListForm toggleExpand={() => toggleExpand(3)} />,
    },
  ];

  return (
    <>
      {boxData.map((box, index) => (
        <div key={index}>
          <Box
            key={index}
            imageSrc={box.imageSrc}
            numberImage={box.numberImage}
            maintext={box.maintext}
            buttonText={box.buttonText}
            text={box.text}
            width={box.width}
            height={box.height}
            isExpand={expandStates[index]} // 해당 박스의 expand 상태
            expandContent={expandStates[index] ? box.expandContent : null}
            onClick={() => toggleExpand(index)} // 클릭 시 해당 박스만 열기
          />
        </div>
      ))}
    </>
  );
}
