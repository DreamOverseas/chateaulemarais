import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Location = () => {
  const transportOptions = [
    {
      title: 'By Car',
      icon: '/location/car.svg',
      description: 'Drive from Sydney to nearby Coomba Park or Forster (approximately 3 hours, 310km). From there, you will need to arrange your own boat transport to the island.',
      highlight: 'Parking available at departure points'
    },
    {
      title: 'By Private Boat / Rental',
      icon: '/location/boat.svg',
      description: 'Charter your own boat or rent one from Coomba Park (5 minutes to island) or Forster (25 minutes to island). Several boat rental services are available at both locations.',
      highlight: 'Self-arranged boat transport required'
    },
    {
      title: 'By Air',
      icon: '/location/plane.svg',
      description: 'Fly to Newcastle Airport or land at Wallis Airport (Private). From Newcastle, it\'s a 2-hour drive to boat departure points where you\'ll need to arrange water transport.',
      highlight: 'Helicopter transfers can be arranged'
    },
    {
      title: 'By Train + Boat',
      icon: '/location/train.svg',
      description: 'Take the train from Sydney to nearby stations (approximately 5 hours, 300km), then drive or take transport to boat departure points. Boat rental required for final journey to island.',
      highlight: 'Most scenic route option'
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

      {/* Transport Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Transportation Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to reach our island paradise. Each option requires self-arranged boat transport for the final leg of your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-4">
                    <img src={option.icon} alt={option.title} className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{option.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {option.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {option.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boat Rental Information */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Boat Rental Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-600">Coomba Park</h4>
              <p className="text-gray-600 mb-3">Closest departure point - only 5 minutes to the island</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multiple boat rental operators</li>
                <li>• Secure parking available</li>
                <li>• Fuel and supplies nearby</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-600">Forster</h4>
              <p className="text-gray-600 mb-3">Larger town with more services - 25 minutes to island</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Wide selection of rental boats</li>
                <li>• Tourist facilities available</li>
                <li>• Professional charter services</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-600 text-lg">
              We recommend contacting boat rental services in advance to ensure availability. 
              Our concierge team can provide recommendations and assistance with bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Find Us on the Map</h3>
          <p className="text-gray-600 text-lg">
            Discover our exact location and plan your route to this exclusive island destination
          </p>
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mx-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65922.6005004571!2d152.4919626059453!3d-32.21139765892243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b74398fda7fe653%3A0x65093d4478f95452!2sCh%C3%A2teau%20le%20Marais!5e0!3m2!1szh-CN!2sau!4v1743391995430!5m2!1szh-CN!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;