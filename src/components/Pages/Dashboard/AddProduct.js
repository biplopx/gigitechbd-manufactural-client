import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    const product = {
      name: data.name,
      img: data.img,
      description: data.description,
      minQuantity: parseInt(data.minQuantity),
      availableQuantity: parseInt(data.availableQuantity),
      price: parseFloat(data.price)
    }
    fetch('https://gigitec-bd.onrender.com/product/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Product successfully added')
        reset()
      })
  }
  return (
    <div className='flex justify-center'>
      <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
        <h2 className="text-2xl text-center font-bold text-accent mb-3">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Please enter product name'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
          </div>
          {/* Description */}
          <div className="form-control w-full ">
            <label className="label font-semibold">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: 'Product description is required'
                }
              })}
              className="textarea textarea-bordered" rows="6"></textarea>
            <label className="label">
              {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
            </label>
          </div>
          {/* Minimum Quantity */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Minimum Oder Quantity</span>
            </label>
            <input type="description"
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: 'Please enter minimum oder quantity amount'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
            </label>
          </div>
          {/* Availabe/Stock Quantity */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Available/Stock Quantity</span>
            </label>
            <input type="number"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: 'Please enter available/stock quantity amount'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
            </label>
          </div>
          {/* Prdoduct Prices */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Price</span>
            </label>
            <input type="number"
              {...register("price", {
                required: {
                  value: true,
                  message: 'Please enter product price'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
            </label>
          </div>
          {/* Prdoduct Prices */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Image URL</span>
            </label>
            <input type="text"
              {...register("img", {
                required: {
                  value: true,
                  message: 'Please give image url'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
            </label>
          </div>
          <input className='btn btn-primary w-full text-white' type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;