//css import
import { fetchUpdateProducts } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

//singile user page function
const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchUpdateProducts(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="noavatar" fill />
        </div>
        {product.title}
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
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="pen">Pen</option>
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
