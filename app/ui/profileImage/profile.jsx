//Dependencies
import Image from "next/image";
import styles from "./profile.module.css";
const ProfileImage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile}
        src="/noavatar.png"
        alt="noavatar"
        width={40}
        height={40}
      />
      John Doe
    </div>
  );
};

export default ProfileImage;
