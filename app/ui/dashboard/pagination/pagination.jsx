"use client";
//Dependencies
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import styles from "./pagination.module.css";
//Pagination Main function
const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  //item page
  const page = searchParams.get("page") || 1;

  //search params
  const params = new URLSearchParams(searchParams);
  const Item_Per_Page = 5; //item per page

  //page button variables
  const hasPrev = Item_Per_Page * (parseInt(page) - 1) > 0;
  const hasNext = Item_Per_Page * (parseInt(page) - 1) + Item_Per_Page < count;

  //handle chnage page
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        <MdArrowBack />
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
