"use client";

import InputCommon from "../common/InputCommon";
import ButtonCommon from "../common/ButtonCommon";

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
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit}>
        <InputCommon
          label="이름"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <InputCommon
          label="나이"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <InputCommon
          label="성별"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
        <InputCommon
          label="목적"
          value={formData.object}
          onChange={(e) => setFormData({ ...formData, object: e.target.value })}
        />
        <InputCommon
          label="특이사항"
          value={formData.issue}
          onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
        />
        <ButtonCommon type="submit" text="정보 제출하기" />
      </form>
    </div>
  );
}
