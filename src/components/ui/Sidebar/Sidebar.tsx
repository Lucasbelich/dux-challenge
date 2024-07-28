import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const sidebarData = [
    {
      icon: "pi pi-box",
      label: "Dashboard",
      path: "/",
    },
    {
      icon: "pi pi-user",
      label: "Users",
      path: "/users",
    },
  ];
  return (
    <div
      className={`${styles.sidebar__container} w-4rem flex flex-column align-items-center gap-2 p-3 `}
    >
      {sidebarData.map((item, index) => (
        <Link href={item.path} key={index}>
          <i className={`${item.icon} text-white text-2xl`}></i>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
