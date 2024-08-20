//Dependencies
import ProfileImage from "../../profileImage/profile";
import styles from "./transactions.module.css";

//Transactions main functions
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transictions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <ProfileImage />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5.600</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <ProfileImage />
                Derek M. Metz
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Approved
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5.600</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <ProfileImage />
                Virginia K. Rodriguez
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5.600</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <ProfileImage />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5.600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
