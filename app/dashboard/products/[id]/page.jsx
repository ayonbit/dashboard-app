//css import
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

import Image from "next/image";

//singile user page function
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$1000" />
          <label>Inventory</label>
          <input type="number" name="inventory" placeholder="10" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Xl" />
          <label>Color</label>
          <input type="text" name="color" placeholder="white" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="phone">Phone</option>
            <option value="electornics">Electornics</option>
            <option value="laptop">Laptop</option>
            <option value="cloth">Cloth</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="Description" />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
