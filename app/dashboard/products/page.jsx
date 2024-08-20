//Dependencies
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import ProductImage from "@/app/ui/productsImage/productImage";
import Search from "@/app/ui/search/search";
import Link from "next/link";
//Users Main Function
const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Product..." />
        <Link href="/dashboard/products/add">
          <button type="button" className={styles.addProduct}>
            Add Products
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Category</td>
            <td>Inventory</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.prodcts}>
                <ProductImage />
                Iphone
              </div>
            </td>

            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo.
            </td>
            <td>$ 1103.00 </td>
            <td>Phone</td>
            <td>34 in Stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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
          <tr>
            <td>
              <div className={styles.prodcts}>
                <ProductImage />
                Asus Vivobook 15 Pro
              </div>
            </td>

            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ipsam est cumque.
            </td>
            <td>$ 1999.00 </td>
            <td>Notebook</td>
            <td>5 in Stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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
          <tr>
            <td>
              <div className={styles.prodcts}>
                <ProductImage />
                Samsung F20
              </div>
            </td>

            <td>
              Lorem ipsum dolor sit amet consectetur. Culpa ipsam est
              cumque.Culpa.
            </td>
            <td>$ 99.00 </td>
            <td>Phone</td>
            <td>50 in Stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductPage;
