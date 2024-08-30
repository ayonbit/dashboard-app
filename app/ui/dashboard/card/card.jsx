//Dependencies
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "../card/card.module.css";

//Card Main Function
const Card = ({ count }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>{count}</span>
        <span className={styles.details}>
          <span className={styles.postive}>2%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
