import { useState } from 'react';

function ProductForm() {
  // Arrays for product names and prices
  const productNames = ["AMD Ryzen 5 3600", "Intel Core i5-10600K", "AMD Ryzen 7 3700X"];
  const productPrices = [245, 280, 320];

  // States for selected product and quantity
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);  // Default product
  const [quantity, setQuantity] = useState(1);  // Default quantity is 1

  // dropdown product selection
  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Check for minus quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h2>Select product</h2>
      <label>Product:</label>
      {/* Dropdown for selecting a product */}
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {productNames.map((product, index) => (
          <option key={index} value={index}>
            {product} ({productPrices[index]}€)
          </option>
        ))}
      </select>

      <br />
      <label>Quantity:</label>
      {/* Buttons for adjusting the quantity */}
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default ProductForm;
