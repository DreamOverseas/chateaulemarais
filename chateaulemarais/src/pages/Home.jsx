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
      <section className="py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div>
            <div className="text-4xl font-bold">Chateau Le Marais</div>
            <p className="text-lg text-gray-700">
              8-10 guests | 5 bedrooms | 5 King beds | 5 baths
            </p>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleShare}
          >
            <img src="/home/share.svg" alt="Share" className="h-6 w-6" />
            <div className="text-lg font-medium text-gray-700">Share</div>
          </div>
        </div>
      </section>

      {/* Hero Section with Slider */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden relative aspect-video rounded-lg">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            &rarr;
          </button>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
            Escape to Chateau Le Marais
          </h2>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Welcome to a palatial mansion on a secluded island off the beautiful New South Wales north coast. The nearby town of Forster is about 165 kilometres north of Newcastle and a 109-kilometre drive south of Port Macquarie. This dream 257 acre haven is only accessible via sea or air, with a private helicopter pad and jetty. Less than four hours from Sydney's CBD.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed">
            Experience luxury and tranquility like never before.
          </p>
        </div>
      </section>
{/* Property Details Section - Grid Layout (3 columns x 2 rows) */}
<section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-8 tracking-wide">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Size */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/size.svg" alt="Size icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Size</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Private Residence with 3 levels 5 bedrooms, 5 baths, 10549 square feet, 981 square meters
              </p>
            </div>
            {/* Bedrooms */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/bed.svg" alt="Bedrooms icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Bedrooms</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                5 King Sized Bedrooms. 10 guests maximum
              </p>
            </div>
            {/* Nearest airport */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/airport.svg" alt="Nearest airport icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Nearest airport</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Newcastle Airport or private jet airport on Wallis Airport (Private) About 110 minute drive
              </p>
            </div>
            {/* Property View */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/view.svg" alt="Property View icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Property View</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Facing a beautiful view of Wallis Lake and surrounded by forests and marshlands. A short walk takes you to the private jetty - where you can enjoy recreational water sports and fishing!
              </p>
            </div>
            {/* Amenities */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/pet.svg" alt="Amenities icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Amenities</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Pets Welcome Upon Approval. Not Handicap Accessible.
              </p>
            </div>
            {/* Private dining */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/home/dinning.svg" alt="Private dining icon" className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Private dining</h3>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                Private chef and catering can be organized upon request prior to arrival, at an additional cost (to be arranged with the Host directly).
              </p>
            </div>
          </div>
        </div>
      </section>
      <img
            src="/home/10.webp"
            alt="History of Chateau Le Marais"
            className="w-full h-auto rounded-lg mb-8 object-cover"
          />
      {/* History Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-8 tracking-wide">History</h2>
          
          <div className="text-xl text-gray-800 leading-relaxed space-y-6">
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