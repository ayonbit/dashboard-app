//Dependencies
import styles from "@/app/ui/login/login.module.css";
import { authenticateUser } from "../lib/UserActions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticateUser} className={styles.form}>
        <h1 className="font-extrabold text-3xl">Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
