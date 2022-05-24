import { AuthErrorCodes } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const ProductDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/product/${id}`
  const { data: product, isLoading } = useQuery('product', () => fetch(url)
    .then(res => res.json()));

  const [user, loading] = useAuthState(auth);

  const { register, watch, getValues, formState: { errors }, handleSubmit } = useForm();
  // const { isDirty } = useFormState();
  const watchShowQuantity = watch("quantity", product?.minQuantity);


  if (isLoading || loading) {
    return <Loading></Loading>
  }

  const onSubmit = data => {
    console.log(data)
    const order = {
      name: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
      quantity: parseInt(data.quantity),
      price: parseInt(product.price * watchShowQuantity),
    }
    console.log(order)
  }

  return (
    <>
      <PageTitle title={product.name}></PageTitle>
      <section className='py-12 p-5 bg-sky-100'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
            <div className='flex-1 p-5 rounded-md bg-white border-2'>
              <h2 className='text-center text-2xl text-accent font-bold mb-8'>Product Details</h2>
              <hr />
              <div className='lg:w-2/4 w-full border-2 mx-auto my-4 p-3 rounded-md'>
                <img src={product.img} alt="" />
              </div>
              <div className='p-3'>
                <div className='bg-slate-100 text-accent p-3 rounded-md'>
                  <h2 className='text-lg font-semibold'>Specification</h2>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Product ID:</strong> {product._id}</p>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Name:</strong> {product.name}</p>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Description:</strong> {product.description}</p>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Price:</strong> {product.price}</p>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Min order Quantity:</strong> {product.minQuantity}</p>
                </div>
                <div className='p-3 my-2 border-b-2 border-slate-100'>
                  <p><strong>Available Quantity:</strong> {product.availableQuantity}</p>
                </div>
              </div>
            </div>
            <div className='flex-1 p-5 rounded-md bg-white border-2 sticky top-0'>
              <h2 className='text-center text-2xl text-accent font-bold mb-5'>Order Now</h2>
              <p className='text-center text-lg'>Please fill this form to order this products</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Ful name Input */}
                <div className="form-control w-full">
                  <label className="label font-semibold">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" value={user.displayName} className="input input-bordered w-full" disabled />
                </div>
                {/* Email Input */}
                <div className="form-control w-full ">
                  <label className="label font-semibold">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" className="input input-bordered w-full" value={user.email} disabled />
                </div>
                {/* address Input */}
                <div className="form-control w-full">
                  <label className="label font-semibold">
                    <span className="label-text">Shipping Address</span>
                  </label>
                  <input type="text"
                    {...register("address", {
                      required: {
                        value: true,
                        message: 'Please provide your shipping address'
                      }
                    })}
                    placeholder="Enter your shipping address" className="input input-bordered w-full" />
                  <label className="label">
                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                  </label>
                </div>
                {/* address Input */}
                <div className="form-control w-full">
                  <label className="label font-semibold">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="text"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: 'Please provide your phone number'
                      }
                    })}
                    placeholder="Enter your phone number" className="input input-bordered w-full" />
                  <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                  </label>
                </div>
                {/* Quantity Input */}
                <div className="form-control w-full">
                  <label className="label font-semibold">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input type="number"
                    {...register("quantity",
                      // { min: product.minQuantity, max: product.availableQuantity },
                      {
                        // onChange: (e) => { console.log(e) },
                        min: {
                          value: product.minQuantity,
                          message: `You have to purchase at least ${product.minQuantity} products`
                        },
                        max: {
                          value: product.availableQuantity,
                          message: 'You can not oder grater than available quantity'
                        },
                        required: {
                          value: true,
                          message: `Please enter product quantity`
                        }
                      })}
                    placeholder="Enter product purchase quantity" className="input input-bordered" defaultValue={product.minQuantity} />
                  <label className="label">
                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                  </label>
                </div>
                <div className="form-control w-full mb-4">
                  <h2 className="xl font-bold">Total Price: $ <span>{(product?.price) * (getValues('quantity') ? getValues('quantity') : product?.minQuantity)}</span></h2>

                </div>
                <input className='btn btn-primary w-full text-white' type="submit" value="Purchase Now" disabled={watchShowQuantity < product.minQuantity || watchShowQuantity > product.availableQuantity} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;