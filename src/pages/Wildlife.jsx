import React, { useState } from 'react';

const Wildlife = () => {
  // 定义两组 slider 图片数组
  const slider1Images = [
    '/wildlife/slider/1.JPG',
    '/wildlife/slider/2.jpeg',
    '/wildlife/slider/3.jpeg',
    '/wildlife/slider/4.jpeg',
  ];
  const slider2Images = [
    '/wildlife/slider/5.jpg',
    '/wildlife/slider/6.jpg',
    '/wildlife/slider/7.JPG',
    '/wildlife/slider/8.JPG',
  ];

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const handlePrev = (sliderNumber) => {
    if (sliderNumber === 1) {
      setCurrentSlide1((prev) =>
        prev === 0 ? slider1Images.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide2((prev) =>
        prev === 0 ? slider2Images.length - 1 : prev - 1
      );
    }
  };

  const handleNext = (sliderNumber) => {
    if (sliderNumber === 1) {
      setCurrentSlide1((prev) =>
        prev === slider1Images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSlide2((prev) =>
        prev === slider2Images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="bg-white">
      {/* Wildlife Introduction Section (above first slider) */}
      <section className="py-16">
        <div className="w-full">
          <div className="text-center mb-4">
            <img
              src="/wildlife/1.jpg"
              alt="Wildlife Header"
              className="mx-auto w-full h-64 object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto text-left mb-12">
            <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
              Discover the Enchanting Wildlife of Wallis Lake Reserves
            </h2>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              Welcome to the Wallis Lake Reserves, a natural paradise located in the heart of the Mid North Coast of New South Wales. Nestled between the vibrant urban centres of Forster and Tuncurry, our picturesque estuary offers an unforgettable experience for nature enthusiasts and wildlife lovers alike. Take a moment to explore the enchanting flora and fauna that call this serene sanctuary home.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Immerse yourself in the untamed beauty of the Wallis Lake Reserves, where the picturesque estuary captivates visitors with its lush forests, wetlands, and coastal dunes. Embark on a wildlife adventure to spot unique species like the Wallis Lake Gecko, the Eastern Grey Kangaroo, and the Grey-headed Flying Fox in their natural habitat. The reserves offer a truly unparalleled experience, leaving guests with a deep appreciation for the wonders of the wild.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Rediscover the wonders of nature on Wallis Island. Lose yourself in this secluded paradise and indulge in unhurried explorations amidst its expansive and diverse biomes. From pristine beaches to marshy swamplands, verdant forests, and picturesque orchards offering delightful fruit-picking experiences, a multitude of natural treasures await just outside your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* First Slider Section */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden relative aspect-video rounded-lg">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentSlide1 * 100}%)` }}
            >
              {slider1Images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Slider 1 - ${index + 1}`}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => handlePrev(1)}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &larr;
          </button>
          <button
            onClick={() => handleNext(1)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &rarr;
          </button>
        </div>
      </section>

      {/* Text Section between Sliders */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
            Thriving Wildlife
          </h2>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Welcome to the Wallis Lake Reserves, a natural paradise located in the heart of the Mid North Coast of New South Wales. Nestled between the vibrant urban centres of Forster and Tuncurry, our picturesque estuary offers an unforgettable experience for nature enthusiasts and wildlife lovers alike. Take a moment to explore the enchanting flora and fauna that call this serene sanctuary home.
          </p>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Immerse yourself in the untamed beauty of the Wallis Lake Reserves, where the picturesque estuary captivates visitors with its lush forests, wetlands, and coastal dunes. Embark on a wildlife adventure to spot unique species like the Wallis Lake Gecko, the Eastern Grey Kangaroo, and the Grey-headed Flying Fox in their natural habitat. The reserves offer a truly unparalleled experience, leaving guests with a deep appreciation for the wonders of the wild.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed">
            Please be aware of the wildlife on the property, as there are venomous animals and other hazardous wildlife. We ask you to not try and directly contact, touch or feed the wildlife.
          </p>
        </div>
      </section>

      {/* Second Slider Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden relative aspect-video rounded-lg">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentSlide2 * 100}%)` }}
            >
              {slider2Images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Slider 2 - ${index + 1}`}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => handlePrev(2)}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &larr;
          </button>
          <button
            onClick={() => handleNext(2)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Wildlife;