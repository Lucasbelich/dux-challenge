"use client";

import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  name: string;
  options: Option[];
  optionLabel: string;
  placeholder: string;
  defaultValue?: string | number;
  errors: string;
}

const DropdownSelect = ({
  name,
  options,
  placeholder,
  optionLabel,
  defaultValue,
  errors,
}: Props) => {
  const defaultValueOption = {
    value: defaultValue,
    label: defaultValue?.toString(),
  };

  const [state, setState] = useState<string | number | null>(
    defaultValueOption.value || null
  );

  const handleChange = (e: DropdownChangeEvent) => {
    setState(e.value);
  };
  return (
    <div>
      <Dropdown
        name={name}
        value={state}
        onChange={handleChange}
        options={options}
        optionLabel={optionLabel}
        placeholder={placeholder}
        className="w-full"
      />
      <p className="text-red-500">{errors}</p>
    </div>
  );
};

export default DropdownSelect;
