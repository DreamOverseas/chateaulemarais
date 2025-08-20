import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Location = () => {
  const transportOptions = [
    {
      title: 'By Car',
      icon: '/location/car.svg',
      description: 'The car journey time between Sydney and Wallis Lake is around 3h and covers a distance of around 310 km.',
    },
    {
      title: 'By Boat / Water Taxi',
      icon: '/location/boat.svg',
      description: 'A 5 minute boat ride from Coomba Park wharf or a 25 minute boat ride from Forster.',
    },
    {
      title: 'By Plane',
      icon: '/location/plane.svg',
      description: 'Newcastle Airport or private jet airport on Wallis Airport (Private). About 2 hours drive.',
    },
    {
      title: 'By Train',
      icon: '/location/train.svg',
      description: 'The train journey time between Sydney and Wallis Lake is around 5h and covers a distance of around 300 km.',
    },
  ];

  return (
    <div className="bg-white">


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-12">How to get here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {transportOptions.map((option, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={option.icon} alt={option.title} className="h-10 w-10" />
                  <h6 className="text-xl font-semibold">{option.title}</h6>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65922.6005004571!2d152.4919626059453!3d-32.21139765892243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b74398fda7fe653%3A0x65093d4478f95452!2sCh%C3%A2teau%20le%20Marais!5e0!3m2!1szh-CN!2sau!4v1743391995430!5m2!1szh-CN!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


    </div>
  );
};

export default Location;
