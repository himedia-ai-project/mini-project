"use client";

import { SxProps, TextField } from "@mui/material";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  sx?: SxProps;
  label: string;
}

const InputCommon = ({
  value,
  onChange,
  type = "text",
  placeholder,
  label,
}: InputProps) => {
  return (
    <TextField
      label={label}
      size="small"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      sx={{
        width: "320px",
        height: "32px",
        backgroundColor: "white",
        "& .MuiInputBase-root": {
          height: "32px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
        },
        "& .MuiOutlinedInput-input": {
          fontSize: "14px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#757575",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#757575",
        },
      }}
    />
  );
};

export default InputCommon;
