import React, { useState, useEffect } from 'react';
import './Products.css';
import data from '../../assets/data';

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const [totalPrices, setTotalPrices] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity !== '' ? quantity : undefined,
    }));
  };
  

  useEffect(() => {
    const newTotalPrices = Object.entries(quantities).reduce(
      (acc, [productId, quantity]) => {
        const product = data.find((item) => item.id === parseInt(productId));
        const total = isNaN(quantity) ? 0 : product.rate * parseInt(quantity);
        return { ...acc, [productId]: total };
      },
      {}
    );

    setTotalPrices(newTotalPrices);
  }, [quantities]);

  return (
    <div>
      <h1 className='p-title'>Our Products</h1>
      <div className='products'>
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="p-details">
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.volume}</p>
              <input
                type="number"
                placeholder="Enter the no of pieces"
                value={quantities[item.id] !== undefined ? quantities[item.id] : ''}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
/>
<div className='total total-container'>
  <p>Total Price: Rs. {totalPrices[item.id]?.toFixed(2)}</p>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
