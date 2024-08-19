//Dependencies
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "../card/card.module.css";

//Card Main Function
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.173</span>
        <span className={styles.details}>
          <span className={styles.postive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
