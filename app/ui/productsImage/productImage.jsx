//Dependencies
import Image from "next/image";
import styles from "./productImage.module.css";
const ProductImage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.product}
        src="/noproduct.jpg"
        alt="noproduct"
        width={40}
        height={40}
      />
    </div>
  );
};

export default ProductImage;
