import { Button } from "primereact/button";

interface Props {
  label: string;
  icon: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

const ButtonPrimary = ({ label, icon, type, onClick }: Props) => {
  return (
    <Button
      type={type}
      label={label}
      icon={icon}
      className="h-max px-12 py-12 gap-2 text-white bg-blue-500 hover:bg-blue-600 border-none"
      onClick={onClick}
    />
  );
};

export default ButtonPrimary;
