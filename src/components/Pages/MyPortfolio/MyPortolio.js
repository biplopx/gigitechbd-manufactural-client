import React from 'react';
import PageTitle from '../../Shared/PageTitle';

const MyPortolio = () => {
  return (
    <>
      <PageTitle title="My Portfolio"></PageTitle>

      <section className='py-12 p-5'>
        <h2 className='text-3xl text-center mb-5 font-bold'>My Portfolio</h2>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center p-5 border-2 rounded">
            <div>
              <div class="avatar">
                <div class="w-80 rounded-xl mx-auto">
                  <img src="https://i.postimg.cc/v8hVBTcK/biplopx.jpg" alt="MD Biplop Hossain" />
                </div>
              </div>
              <div className='my-5'>
                <h2 className='text-xl font-semibold'>Name: MD Biplop Hossain</h2>
                <h2 className='text-xl font-semibold'>Email: developerbiplop@gmail.com</h2>
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold text-center mb-4'>My Education Background</h2>
              <div className='mb-5 border-b-2'>
                <label className='font-bold text-xl mb-5'>SSC</label>
                <p className='text-lg'>Technical Traning Centre, Bogura</p>
              </div>
              <div className='mb-5 border-b-2'>
                <label className='font-semibold text-xl mb-5'>Diploma in engineering at Computer Technology</label>
                <p className='text-lg'>Rajshahi Polytechnic Institute, Rajshahi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12'>
        <h2 className='text-3xl text-center mb-5 font-bold'>My Skill</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
          <div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>HTML</label>
              <progress class="progress progress-primary w-56 h-3" value="90" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>CSS</label>
              <progress class="progress progress-primary w-56 h-3" value="85" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>Javscript</label>
              <progress class="progress progress-primary w-56 h-3" value="70" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>React</label>
              <progress class="progress progress-primary w-56 h-3" value="60" max="100"></progress>
            </div>
          </div>

          <div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>Firebase</label>
              <progress class="progress progress-primary w-56 h-3" value="50" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>MonogDB</label>
              <progress class="progress progress-primary w-56 h-3" value="20" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>Node.js</label>
              <progress class="progress progress-primary w-56 h-3" value="10" max="100"></progress>
            </div>
            <div className='mb-4'>
              <label className='text-lg font-bold block'>Express.js</label>
              <progress class="progress progress-primary w-56 h-3" value="30" max="100"></progress>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 p-5'>
        <h2 className='text-3xl text-center mb-5 font-bold'>My Project</h2>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-7'>
            <div class="card bg-base-100 border-2">
              <div class="card-body">
                <h2 class="card-title">Bike Warehouse Managment</h2>
                <p>Bikewarehouse is modern warehouse management system based on web. Our system you can make your warehouse a digital warehouse. Here you can add product and manage your product. You can easily create and store your products to manage it digitaly. Make your business digital with us.
                </p>
                <div class="card-actions justify-start my-3">
                  <button class="btn btn-primary"><a href="https://bike-warehouse-6da93.web.app/">Visit Project</a></button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 border-2">
              <div class="card-body">
                <h2 class="card-title">Photopedia </h2>
                <p>This website for independent services provider website. This website made for photographer who give photograph services. where user can book for photo shoot.
                </p>
                <div class="card-actions justify-start my-3">
                  <button class="btn btn-primary"><a href="https://photo-pedia.web.app/">Visite Project</a></button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 border-2">
              <div class="card-body">
                <h2 class="card-title">Convent Center Websites</h2>
                <p>Convention center website design using bootstrap 5 css framework.
                </p>
                <div class="card-actions justify-start my-3">
                  <button class="btn btn-primary"><a href="https://mbh-convention-center.netlify.app/">Visite Project</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortolio;