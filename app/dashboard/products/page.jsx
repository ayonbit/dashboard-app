//Dependencies
import { fetchProducts } from "@/app/lib/data";
import { DeleteProduct } from "@/app/lib/ProductAction";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/search/search";
import Image from "next/image";
import Link from "next/link";
//Users Main Function
const ProductPage = async ({ searchParams }) => {
  //search params
  const q = searchParams?.q || "";
  //page pagination
  const page = searchParams?.page || 1;
  //user fetch function
  const { count, products } = await fetchProducts(q, page);
  //console.log(users);

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
            <td>Size</td>
            <td>Color</td>
            <td>Category</td>
            <td>Inventory</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            //console.log(product.img);
            return (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.img || "/noproduct.jpg"}
                      alt="noproduct"
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {product.title}
                  </div>
                </td>
                <td className={styles.desc}>{product.desc}</td>
                <td>$ {product.price} </td>
                <td>{product.size}</td>
                <td>{product.color}</td>
                <td>{product.cat}</td>
                <td>{product.inventory}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>

                    <form action={DeleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
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

export default ProductPage;
