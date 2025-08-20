import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Events = () => {
  const events = [
    {
      title: 'Corporate Events',
      icon: '/events/corporate.svg',
      description:
        'Host unforgettable corporate events at our stunning property, where sophistication meets functionality for a seamless experience.',
    },
    {
      title: 'Weddings',
      icon: '/events/weddings.svg',
      description:
        'Discover the enchanting wedding venue of your dreams at our picturesque property, perfect for creating unforgettable memories that will last a lifetime.',
    },
    {
      title: 'Honeymoon',
      icon: '/events/honeymoon.svg',
      description:
        "Discover the ultimate romantic escape with our enchanting Honeymoon packages, designed to create unforgettable memories for you and your special someone.",
    },
    {
      title: 'Board Meetings',
      icon: '/events/board.svg',
      description:
        'Elevate your next board meeting to new heights with our sophisticated venues, state-of-the-art technology, and unparalleled service – all designed to inspire collaboration and success.',
    },
    {
      title: 'Wellbeing',
      icon: '/events/wellbeing.svg',
      description:
        'Discover the ultimate oasis of tranquility and rejuvenation with our exclusive Wellbeing events, designed to elevate your lifestyle and transform your living experience.',
    },
    {
      title: 'Run Away',
      icon: '/events/escape.svg',
      description:
        'Escape the ordinary and experience the extraordinary at our exclusive \"Run Away\" events, designed to transform your property dreams into reality!',
    },
  ];

  const sliderImages = [
    '/events/slider/1.jpg',
    '/events/slider/2.jpg',
    '/events/slider/3.jpg',
    '/events/slider/4.webp',
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="bg-white">


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-16">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {events.map((event, index) => (
              <div key={index} className="text-left">
                <div className="flex items-center mb-4">
                  <img src={event.icon} alt={event.title} className="w-10 h-10 mr-4" />
                  <h6 className="text-xl font-semibold">{event.title}</h6>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-left">
          <h2 className="text-4xl font-bold mb-6">Host your next event with us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover the ultimate event experience at our exquisite property, where sophistication and functionality come together to create unforgettable memories. From lavish corporate events and enchanting weddings to idyllic honeymoons and wellness retreats, we offer a diverse range of tailor-made packages to suit your every need.
          </p>

          {/* Slider Section */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
              &larr;
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
              &rarr;
            </button>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Our state-of-the-art facilities, unparalleled service, and breathtaking surroundings ensure that your special occasion is truly unforgettable. Join us and transform your dreams into reality as you escape the ordinary and embrace the extraordinary at our one-of-a-kind event destination.
          </p>
          <p className="text-lg text-gray-700">
            Elevate your next event to new heights with our exceptional venues, each thoughtfully designed to inspire creativity and collaboration. Our dedicated team of professionals work tirelessly to ensure every detail is meticulously planned and executed, allowing you to focus on making lasting connections and memories.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-12">
          <img
            src="/events/1.jpg"
            alt="Event Venue"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </section>

 
    </div>
  );
};

export default Events;
