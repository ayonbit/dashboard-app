"use client";
//dependencies
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import Search from "../../search/search";
import styles from "./navbar.module.css";

//navbar function
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <Search placeholder="Search ...." />
        <div className={styles.icon}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
