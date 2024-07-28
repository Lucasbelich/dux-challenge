import Image from "next/image";
import isoLogo from "../../../../public/images/iso-logo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div
      className={`${styles.header__container} w-full flex flex-row align-items-center justify-content-between pl-2 pr-3`}
    >
      <Image src={isoLogo} alt="logo" width={44} height={43} />
      <i className="pi pi-cog text-white text-2xl"></i>
    </div>
  );
};

export default Header;
