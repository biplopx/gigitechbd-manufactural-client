import React from 'react';

const Review = ({ review }) => {
  const { userImg, name, reviewDescription, rating } = review;
  return (
    <div className="card w-90 bg-base-100 rounded-md border-2">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={userImg == null ? 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png' : userImg} alt='avater' />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{reviewDescription}</p>
        <p><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
  );
};

export default Review;