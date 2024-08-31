//Dependencies
import styles from "@/app/ui/dashboard/invoice/invoice.module.css";
//Invoice Data Function
const invoiceData = {
  invoiceNumber: "INV-12345",
  date: "2023-10-01",
  dueDate: "2023-10-15",
  customer: {
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
  },
  items: [
    { description: "Item 1", quantity: 2, price: 50 },
    { description: "Item 2", quantity: 1, price: 100 },
    { description: "Item 3", quantity: 3, price: 30 },
  ],
};
//Invoice main  function
const InvoicePage = () => {
  const calculateTotal = () => {
    return invoiceData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      <h1>Invoice</h1>
      <div className={styles.header}>
        <h2>Invoice Details</h2>
        <p>
          <strong>Invoice Number:</strong> {invoiceData.invoiceNumber}
        </p>
        <p>
          <strong>Date:</strong> {invoiceData.date}
        </p>
        <p>
          <strong>Due Date:</strong> {invoiceData.dueDate}
        </p>
      </div>
      <div className={styles.section}>
        <h2>Customer Information</h2>
        <p>
          <strong>Name:</strong> {invoiceData.customer.name}
        </p>
        <p>
          <strong>Address:</strong> {invoiceData.customer.address}
        </p>
        <p>
          <strong>Email:</strong> {invoiceData.customer.email}
        </p>
      </div>
      <div className={styles.section}>
        <h2>Items</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Description</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td className={styles.td}>{item.description}</td>
                <td className={styles.td}>{item.quantity}</td>
                <td className={styles.td}>${item.price.toFixed(2)}</td>
                <td className={styles.td}>
                  ${(item.quantity * item.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.total}>
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default InvoicePage;
