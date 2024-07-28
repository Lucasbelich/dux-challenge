import { Button } from "primereact/button";

interface Props {
  label: string;
  icon: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

const ButtonSecondary = ({ label, icon, type, onClick }: Props) => {
  return (
    <Button
      type={type}
      label={label}
      icon={icon}
      className="h-max px-12 py-12 gap-2 bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
      onClick={onClick}
      outlined
    />
  );
};

export default ButtonSecondary;
