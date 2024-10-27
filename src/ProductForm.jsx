import { useState } from 'react';
import OrderInfo from './OrderInfo.jsx';

function ProductForm() {
  const productNames = ["AMD Ryzen 5 3600", "Intel Core i5-10600K", "AMD Ryzen 7 3700X"];
  const productPrices = [245, 280, 320];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);  

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h2>Select product</h2>
      <label>Product:</label>
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {productNames.map((product, index) => (
          <option key={index} value={index}>
            {product} ({productPrices[index]}€)
          </option>
        ))}
      </select>

      <br />
      <label>Quantity:</label>
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>

      <OrderInfo
        productName={productNames[selectedProductIndex]}
        productPrice={productPrices[selectedProductIndex]}
        quantity={quantity}
      />
    </div>
  );
}

export default ProductForm;
