import React from 'react';

const Slider = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex transition-transform duration-700">
        <img 
          src="https://cdn.prod.website-files.com/637c3751c31bc345ea12b132/643d0fe7ab5dcfe8955be0d8_sh1.remini-enhanced.webp" 
          alt="Slide 1" 
          className="w-full"
        />
        <img 
          src="https://cdn.prod.website-files.com/637c3751c31bc345ea12b132/64ae059dbfe65cca788c097e_Jetty%201%20.png" 
          alt="Slide 2" 
          className="w-full"
        />
        <img 
          src="https://cdn.prod.website-files.com/637c3751c31bc345ea12b132/643d106ac67b635b48ee8a70_undefined%20(5).webp" 
          alt="Slide 3" 
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Slider;