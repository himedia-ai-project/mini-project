"use client";

import { TextField } from '@mui/material';

interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const InputCommon = ({ label, value, onChange, type = "text", placeholder }: InputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      sx={{
        width: '320px',
        height: '32px',
        '& .MuiInputBase-root': {
          height: '32px',
        },
        '& .MuiInputLabel-root': {
          fontSize: '14px',
        },
        '& .MuiOutlinedInput-input': {
          fontSize: '14px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#757575',
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#757575',
        },
      }}
    />
  );
};

export default InputCommon;
