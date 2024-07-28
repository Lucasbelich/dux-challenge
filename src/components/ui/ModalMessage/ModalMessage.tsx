import Link from "next/link";
import ButtonSecondary from "../ButtonSecondary";

import styles from "./ModalMessage.module.css";

interface Props {
  title: string;
  message: string;
}

const ModalMessage = ({ title, message }: Props) => {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__container}>
        <div className="flex flex-column gap-3 p-5 align-items-center justify-center">
          <div className="flex flex-column align-items-center justify-center ">
            <p className="text-2xl font-bold m-0">{title}</p>
            <p>{message}</p>
          </div>
          <Link href={"/users"} scroll={false}>
            <ButtonSecondary
              type="button"
              label="Cancelar"
              icon="pi pi-times"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalMessage;
