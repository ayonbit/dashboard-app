//Dependencies
import { fetchProducts, fetchUsers } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = async () => {
  //total user fecth
  const { count: userCount } = await fetchUsers();
  const { count: productCount } = await fetchProducts();
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card count={userCount} title="Total Users" />
          <Card count={productCount} title="Total Prodcuts" />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
