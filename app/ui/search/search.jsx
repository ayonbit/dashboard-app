//Dependencies
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

//Search UI main function
const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
