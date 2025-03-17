"use client";

import InputCommon from "../common/InputCommon";

interface FormData {
  name: string;
  age: string;
  gender: string;
  object: string;
  issue: string;
  image: File | null;
}

export default function UserInfoForm({
  handleSubmit,
  formData,
  setFormData,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center w-full max-w-md"
      >
        <InputCommon
          // label="이름"
          labelName="이름"
          placeholder="이름을 입력해주세요.(ex 홍길동 or 길동)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <InputCommon
          // label="나이"
          labelName="나이"
          placeholder="나이를 입력해주세요.(ex 25살)"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <InputCommon
          // label="성별"
          labelName="성별"
          placeholder="성별을 입력해주세요.(ex 여 or 남)"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
        <InputCommon
          // label="목적"
          labelName="목적"
          placeholder="목적을 입력해주세요.(ex 감량 운동중)"
          value={formData.object}
          onChange={(e) => setFormData({ ...formData, object: e.target.value })}
        />
        <InputCommon
          // label="특이사항"
          labelName="특이사항"
          placeholder="특이사항을 입력해주세요.(ex 새우알러지 있음)"
          value={formData.issue}
          onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
        />
      </form>
    </div>
  );
}
