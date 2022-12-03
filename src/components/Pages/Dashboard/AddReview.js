import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase';
import Loading from '../../Shared/Loading';

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  if (loading) {
    return <Loading></Loading>
  }

  const onSubmit = async data => {
    const review = {
      userImg: user.photoURL,
      name: user?.displayName,
      reviewDescription: data.description,
      rating: data.rating,
      userEmail: user?.email
    }
    fetch('https://gigitec-bd.onrender.com/review/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Your review successfully added')
        reset()
      })
  }
  return (
    <div className='flex justify-center rounded-md'>
      <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
        <h2 className="text-xl font-bold text-accent mb-3">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Review Name */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Please enter product name'
                }
              })}
              className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
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
                  message: 'Please write review'
                },
                maxLength: {
                  value: 700,
                  message: 'Your review must be within 600 characters'

                }
              })}
              className="textarea textarea-bordered" rows="6"></textarea>
            <label className="label">
              {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
              {errors.description?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
            </label>
          </div>
          {/* Rating */}
          <div className="form-control w-full">
            <label className="label font-semibold">
              <span className="label-text">Give a Rating (1-5) Stars</span>
            </label>
            <input type="number"
              {...register("rating", {
                min: {
                  value: 1,
                  message: `You must give a minimum one star rating`
                },
                max: {
                  value: 5,
                  message: 'You cannot give more than 5 star rating.'
                },
                required: {
                  value: true,
                  message: 'Rating is required'
                }
              })}
              className="input input-bordered w-full" />
            <label className="label">
              {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
              {errors.rating?.type === 'min' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
              {errors.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
            </label>
          </div>
          <input className='btn btn-primary w-full text-white' type="submit" value="Add Review" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;