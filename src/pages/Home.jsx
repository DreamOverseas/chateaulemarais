import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const sliderImages = [
    '/home/4.webp',
    '/home/1.png',
    '/home/6.webp',
    '/home/8.webp',
    '/home/7.webp',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Chateau Le Marais',
          text: 'Escape to Chateau Le Marais, a luxurious private residence on Wallis Island.',
          url: window.location.href,
        })
        .then(() => console.log('Content shared successfully!'))
        .catch((error) => console.error('Error sharing content:', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <div className="bg-white">
      {/* Header Section Above Slider */}
      <section className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Chateau Le Marais
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-1">
              2 Wings. 2 Bedrooms, 2 Bathrooms, 2 King size beds, 4 adults and 4 children maximum for each wing.
            </p>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            onClick={handleShare}
          >
            <img src="/home/share.svg" alt="Share" className="h-5 w-5 sm:h-6 sm:w-6" />
            <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
              Share
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Slider */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden relative aspect-video rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Chateau Le Marais - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide leading-tight">
            Escape to Chateau Le Marais
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
              Welcome to a palatial mansion on a secluded island off the beautiful New South Wales north coast. The nearby town of Forster is about 165 kilometres north of Newcastle and a 109-kilometre drive south of Port Macquarie. This dream 257 acre haven is only accessible via sea or air, with a private helicopter pad and jetty. Less than four hours from Sydney's CBD.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
              Experience luxury and tranquility like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Property Details Section - Grid Layout */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 tracking-wide leading-tight">
            Property Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Size */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/size.svg" alt="Size icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Size</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Private Residence with 3 levels 4 bedrooms, 4 baths, 10549 square feet, 981 square meters
              </p>
            </div>

            {/* Bedrooms */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/bed.svg" alt="Bedrooms icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Bedrooms</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                4 King Sized Bedrooms. 2 adults and 2 children maximum for each bedroom.
              </p>
            </div>

            {/* Nearest airport */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/airport.svg" alt="Nearest airport icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Nearest airport</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Newcastle Airport or private jet airport on Wallis Airport (Private) About 110 minute drive
              </p>
            </div>

            {/* Property View */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/view.svg" alt="Property View icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Property View</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Facing a beautiful view of Wallis Lake and surrounded by forests and marshlands. A short walk takes you to the private jetty - where you can enjoy recreational water sports and fishing!
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/pet.svg" alt="Amenities icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Amenities</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Pets Welcome Upon Approval. Not Handicap Accessible.
              </p>
            </div>

            {/* Private dining */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/home/dinning.svg" alt="Private dining icon" className="h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Private dining</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Private chef and catering can be organized upon request prior to arrival, at an additional cost (to be arranged with the Host directly).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section with Image */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 tracking-wide leading-tight">
            History
          </h2>
          
          <div className="mb-8">
            <img
              src="/home/10.webp"
              alt="History of Chateau Le Marais"
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed space-y-6">
            <p>
              Wallis Island is a nature reserve near Forster, New South Wales, Australia. It was created in January 1983 and covers an area of 584ha (454.5 acres). It sits within Wallis Lake, just south of the Coolongolook River. It is known for the Forster (Wallis Island) Airport and a $20 million Australian chateau.
            </p>
            <p>
              Chateau Le Marais is a 15-year labour of love for former Woollahra antiques dealers Andre and Cecile Fink, who reportedly snapped up the once virgin island parcel in 1996 for a modest $290,000.
            </p>
            <p>
              The luxurious property was initially intended to serve as the Finks' home and as a showroom for their antiques. However, following the 2007 financial crisis, the Finks' antique business took a hit and, in 2010, the couple were forced to put up the incomplete mansion for sale in 2010, with a price tag of $20 million.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;