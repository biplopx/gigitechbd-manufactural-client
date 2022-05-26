import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const email = user.email;
  const { register, handleSubmit } = useForm();
  const url = `http://localhost:5000/user/${email}`;

  const { data: userInfo, isLoading, refetch } = useQuery('userInfo', () => fetch(url).then(res => res.json()));

  if (loading || isLoading) {
    return <Loading></Loading>
  }

  const onSubmit = async data => {
    const updateProfile = {
      education: data.education,
      location: data.location,
      phone: data.phone,
      linkedin: data.linkedin,
    }
    fetch(`http://localhost:5000/user/update/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updateProfile)
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Profile Update');
        refetch();
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
            <div className="card-body p-5">
              <h2 className="text-xl font-bold text-center mb-3">{user?.displayName}</h2>
              <div className='mb-1'>
                <label className='font-semibold mb-2'>Email: {userInfo.location}</label>
                <p>{email}</p>
              </div>
              <div className='mb-1'>
                <label className='font-semibold mb-2'>Education:</label>
                <p>{userInfo.education ? userInfo.education : <span className='text-red-500'>Please update education</span>}</p>
              </div>
              <div className='mb-1'>
                <label className='font-semibold mb-2'>Location:</label>
                <p>{userInfo.location ? userInfo.location : <span className='text-red-500'>Please update location</span>}</p>
              </div>
              <div className='mb-1'>
                <label className='font-semibold mb-2'>Phone:</label>
                <p>{userInfo.phone ? userInfo.phone : <span className='text-red-500'>Please update phone number</span>}</p>
              </div>
              <div className='mb-1'>
                <label className='font-semibold mb-2'>Likedin Profile Link:</label>
                <p>{userInfo.linkedin ? <a className='text-sky-500' href={userInfo.linkedin}>{userInfo.linkedin}</a> : <span className='text-red-500'>Please update linkedin profile link</span>}</p>
              </div>
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