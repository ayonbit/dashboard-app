//Dependencies
import { AddProduct } from "@/app/lib/ProductAction";
import styles from "@/app/ui/dashboard/products/addProduct/addproduct.module.css";

//Add Product Main Function
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={AddProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat" required>
          <option value="">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="pen">Pen</option>
          <option value="cloth">Cloth</option>
        </select>
        <input type="number" placeholder="Price" name="price" required />
        <input
          type="number"
          placeholder="Inventory"
          name="inventory"
          required
        />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="desc"
          placeholder="Description"
          id="desc"
          rows="16"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
