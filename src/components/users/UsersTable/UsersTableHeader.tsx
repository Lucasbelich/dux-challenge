import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

interface TableHeaderProps {
  globalFilterValue: string;
  selectedState: string;
  states: { value: string; label: string }[];
  onGlobalFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStateChange: (e: DropdownChangeEvent) => void;
}

const UsersTableHeader = ({
  globalFilterValue,
  selectedState,
  states,
  onGlobalFilterChange,
  onStateChange,
}: TableHeaderProps) => {
  return (
    <div className=" flex gap-3">
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Buscar"
        />
      </IconField>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <Dropdown
          value={selectedState}
          onChange={(e: DropdownChangeEvent) => onStateChange(e)}
          options={states}
          optionLabel="label"
          placeholder="Selecciona un estado"
          className="w-full md:w-16rem"
          showClear
        />
      </IconField>
    </div>
  );
};

export default UsersTableHeader;
