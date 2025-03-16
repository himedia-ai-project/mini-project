// "use client";

// import { useState } from "react";
// import Box from "../common/BoxCommon";
// import UserInfoForm from "./UserInfoForm";

// export default function InfoBox() {
//   const [isExpand, setIsExpand] = useState(false);

// <<<<<<< HEAD
// =======
//   const input = [
//     {
//       value: name,
//       placeholder: "이름을 입력해주세요 (ex 홍길동 or 길동)",
//       description: "이름",
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setName(e.target.value),
//     },
//     {
//       value: age,
//       placeholder: "나이을 입력해주세요 (ex 25살)",
//       description: "나이",
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setAge(e.target.value),
//     },
//     {
//       value: gender,
//       placeholder: "성별을 입력해주세요 (ex 여자 or 여)",
//       description: "성별",
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setGender(e.target.value),
//     },
//     {
//       value: object,
//       placeholder: "목적을 입력해주세요 (ex 감량중입니다)",
//       description: "목적",
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setObject(e.target.value),
//     },
//     {
//       value: issue,
//       placeholder: "특이사항을 입력해주세요 (ex 새우알러지 or 병명)",
//       description: "특이사항",
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setIssue(e.target.value),
//     },
//   ];

// >>>>>>> 44159df3acd9eb3e1106277fde94c6af65d0f605
//   return (
//     <>
//       <Box
//         imageSrc="/main_1.svg"
//         numberImage="/number_1.svg"
//         maintext="Info"
//         buttonText={isExpand ? "닫기" : "정보 입력하기"}
//         text='내 정보를 입력하면 <strong class="font-extrabold">더 정확한 정보를 얻고,<br/>그에 맞는 정보를 자세히</strong> 알아볼 수 있어요!'
//         width="540px"
//         height="250px"
//         isExpand={isExpand}
// <<<<<<< HEAD
//         expandContent={isExpand ? <UserInfoForm /> : null}
// =======
//         expandContent={
//           isExpand ? (
//             <div className="flex flex-col gap-2">
//               {input.map((field, index) => (
//                 <div key={index} className="flex flex-col">
//                   <p className="text-gray-600 text-sm mb-1">
//                     {field.description}
//                   </p>
//                   <InputCommon {...field} sx={{ mb: 2 }} />
//                 </div>
//               ))}
//               <ButtonCommon
//                 text="정보 제출하기"
//                 onClick={() => setIsExpand(false)}
//               />
//             </div>
//           ) : null
//         }
// >>>>>>> 44159df3acd9eb3e1106277fde94c6af65d0f605
//         onClick={() => setIsExpand(!isExpand)}
//       />
//     </>
//   );
// }
