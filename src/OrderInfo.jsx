function OrderInfo({ productName, productPrice, quantity }) {
    const total = productPrice * quantity;
  
    return (
      <div>
        <h2>Order info</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{productName}</td>
              <td>{quantity}</td>
              <td>{total}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default OrderInfo;