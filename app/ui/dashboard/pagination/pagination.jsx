//Dependencies
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import styles from "./pagination.module.css";

//Pagination Main function
const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        <MdArrowBack/>
      </button>
      <button className={styles.button}>
        <MdArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
