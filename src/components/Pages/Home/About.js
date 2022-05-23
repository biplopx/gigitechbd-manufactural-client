import React from 'react';

const About = () => {
  return (
    <section className='py-12 px-5'>
      <div className="container mx-auto">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://www.pcworld.com/wp-content/uploads/2021/09/170531-gigabyte-motherboard-2-100725255-orig.jpg?quality=50&strip=all" className="w-full lg:max-w-lg rounded-lg" alt='factory' />
            <div>
              <h1 className="text-5xl text-accent font-bold uppercase">Abouts US</h1>
              <p className="py-6">GigitechBD is a Bangladeshi manufacturer and distributor of computer hardware. Gigabyte's principal business is motherboards. It shipped 4.8 million motherboards in the first quarter of 2015, which allowed it to become the leading motherboard vendor. We provide high quality computer hardware for your dream pc.</p>
              <button className="btn btn-primary text-white"><a href='#contact'>Contact Us</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;