import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, minQuantity, availableQuantity, price } = product;
  return (
    <div className="card bg-base-100 border-2 shadow-none">
      <figure className='p-8'><img src={img} className="w-3/4" alt="Shoes" /></figure>
      <div className="card-body p-8">
        <h2 className="card-title text-2xl mb-3">{name}</h2>
        <hr className='mb-3' />
        <p><strong>Product ID:</strong> {_id}</p>
        <p>{description.length <= '250' ? description : description.slice(0, 251) + '...'}</p>
        <p><strong>Minimum Order Quantity:</strong> {minQuantity}</p>
        <p><strong>Available Quantity:</strong> {availableQuantity}</p>
        <p><strong>Price:</strong> {price} (per unit)</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;