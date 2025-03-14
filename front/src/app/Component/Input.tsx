'use client';

import { useState } from 'react';
import InputCommon from '../common/InputCommon';

interface FormProps {
    label: string;
    placeholder: string;
  }

const Form = ({ label, placeholder }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputCommon 
        label={label}
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder}
      />
    </form>
  );
};

export default Form;

