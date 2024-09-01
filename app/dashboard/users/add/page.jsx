//Dependencies
import {AddUser} from "@/app/lib/UserActions";
import styles from "@/app/ui/dashboard/users/addUser/adduser.module.css";

//Add user main function
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={AddUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="tel" placeholder="Phone" name="phone" required />
        <input
          type="password"
          placeholder="6 digit password"
          name="password"
          required
        />

        <select name="isAdmin" id="isAdmin">
          <option value={false}>isAdmin ?</option>
          <option value={true}>Yes</option>
          <option value={false}>NO</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>isActive ?</option>
          <option value={true}>Yes</option>
          <option value={false}>NO</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          id="address"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
