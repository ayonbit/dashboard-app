//Dependencies
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/search/search";
import Image from "next/image";
import Link from "next/link";

//Users Main Function
const UsersPage = async ({ searchParams }) => {
  //search params
  const q = searchParams?.q || "";
  //page pagination
  const page = searchParams?.page || 1;
  //user fetch function
  const { count, users } = await fetchUsers(q, page);
  //console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button type="button" className={styles.addButton}>
            Add User
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      className={styles.profile}
                      src={user.img || "/noavatar.png"}
                      alt="noavatar"
                      width={50}
                      height={50}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toLocaleDateString()}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/dashboard/users/${user.id}">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <Link href="">
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
