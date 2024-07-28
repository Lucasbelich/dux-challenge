"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";

interface Props {
  name: string;
  placeholder: string;
  defaultValue?: string;
  errors?: string;
  readOnly?: boolean;
}

const Input = ({
  name,
  placeholder,
  defaultValue,
  errors,
  readOnly,
}: Props) => {
  const [value, setValue] = useState<string>(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <InputText
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full"
        readOnly={readOnly}
      />
      <p className="text-red-500">{errors}</p>
    </div>
  );
};

export default Input;
