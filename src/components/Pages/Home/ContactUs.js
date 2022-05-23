import React from 'react';

const ContactUs = () => {
  return (
    <section className='py-12 px-5 bg-[url(https://i.postimg.cc/HLjJtBY4/map.jpg)]'>
      <h2 className='text-center text-3xl text-accent font-bold mb-8'>Contact Us</h2>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row md:flex-col justify-evenly gap-5'>
          <div className="flex-1 bg-primary opacity-70 p-5 rounded-md border-2 text-white">
            <h3 className='text-2xl font-bold mb-5'>Our Location</h3>

            <div className="mb-4">
              <h4 className='text-lg font-bold mb-3'>Office Number</h4>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30"><path d="M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1zM304 384h-224V64h224V384z" fill='white' /></svg>
                </div>
                <p>+88 09612574351</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className='text-lg font-bold mb-3'>Support Email</h4>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" fill='white' /></svg>
                </div>
                <p>support@gigitechbd.com</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className='text-lg font-bold mb-3'>Factory Address</h4>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 384 512"> <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill='white' /></svg>
                </div>
                <p>Road#30, Gulshan, Rajshahi, Bangladesh</p>
              </div>
            </div>

          </div>
          <div className="flex-1 bg-white p-5 rounded-md border-2">
            <h3 className='text-2xl font-bold'>Email Us</h3>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full " />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea className="textarea textarea-bordered" rows="6" placeholder="Message or details"></textarea>
              </div>
              <input type="submit" className="btn w-full text-white" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;