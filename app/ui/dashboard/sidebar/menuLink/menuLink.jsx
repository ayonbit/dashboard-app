"use client";
//css modules & Dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menuLink.module.css";

//Menu function
const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
