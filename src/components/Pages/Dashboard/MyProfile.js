import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../../firebase';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const email = user.email;

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  if (loading) {
    return <Loading></Loading>
  }

  const onSubmit = async data => {
    const updateProfile = {
      education: data.education,
      location: data.location,
      phone: data.phone,
      linkedin: data.linkedin,
    }
    console.log(updateProfile)
    fetch(`http://localhost:5000'/user/update/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updateProfile)
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Profile Update')
        reset()
      })
  }
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
          <h2 className="text-2xl font-bold text-accent mb-3 text-center">My Profile</h2>
          <hr />
          <div className="card w-96 bg-base-100 mx-auto my-5 border-2 border-primary">
            <div className="avatar mx-auto m-3">
              <div className="w-24 rounded-full">
                <img src={user.photoURL == null ? 'https://api.lorem.space/image/face?hash=92310' : user.photoURL} alt="avatar" />
              </div>
            </div>
            <div className="card-body text-left items-center">
              <h2 className="card-title mb-3">{user?.displayName}</h2>
              <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
          <hr className='my-3' />
          {/* Update profile information */}
          <h2 className="text-2xl font-bold text-accent mb-3 text-center">Update Profile Information</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Current Eductaion */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Current Education</span>
                </label>
                <input
                  type="text"
                  {...register("education")}
                  className="input input-bordered w-full" />
              </div>
              {/* Location*/}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Location(City/Distric)</span>
                </label>
                <input
                  type="text"
                  {...register("location")}
                  className="input input-bordered w-full" />
              </div>
              {/* Phone Number */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  {...register("phone")}
                  className="input input-bordered w-full" />
              </div>
              {/* LinkedIn profile link */}
              <div className="form-control w-full mb-5">
                <label className="label font-semibold">
                  <span className="label-text">Linkedin Profile Link</span>
                </label>
                <input
                  type="text"
                  {...register("linkedin")}
                  className="input input-bordered w-full" />
              </div>
              <input className='btn btn-primary w-full text-white' type="submit" value="Update Profile" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;