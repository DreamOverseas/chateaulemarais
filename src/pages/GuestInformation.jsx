import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuestInformation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800">


      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center">Guest Information</h1>
        <p className="text-lg leading-relaxed mb-12">
          Dear Guest:<br />
          Welcome to The Chateau Le Marais on Wallis Island. We're beyond excited to have you!
          This place is very special to you and us. In this page, you’ll find lots of useful and important information for our guests to make their stay very happy and safe.
          From instructions on how to use the appliances to recommendations for nearby restaurants and shopping areas. As well as, information about the special flora and fauna and unique wildlife and animals that will be with you!
          At the same time, pay attention to the special environment, special geographical location, and weather. We've got it all covered.
          We hope that you enjoy the place as much as we did.
          <br />
          Have a great stay!<br />
          Sincerely,<br />
          Château Le Marais - General Manager<br />
          John Du
        </p>

        <div className="space-y-8">
          {infoSections.map((section, idx) => (
            <div key={idx} className="rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/info.svg" alt="Info Icon" className="h-6 w-6" /> {/* 添加图标 */}
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="rounded-lg">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-4 text-xl font-medium bg-gray-100 hover:bg-gray-200"
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 text-gray-700 whitespace-pre-line">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

const infoSections = [
  {
    title: 'Check-in & Check-out',
    content:
      `Check-in is from 2.00pm and check-out in until 11am. Due to the special geographical location, boats are required for check-in and departure, so the change of time must be notified in advance (please ensure notice is given within a reasonable time frame subject to the third party service provider). We’d really appreciate it if you could stick to these times.
If you’d like to request a late check-in or check-out, please contact us. However, please be informed that we may not be able to grant your request.
Please be aware that there are private and off-limit areas on the property including:
Basement generator, Pump room and water tank rooms, Storage room next to the kitchen, Top level attic, Owner’s study (will be locked) and Bedroom 1 Cabinet (Owner’s clothes).`,
  },
  {
    title: 'Transportation',
    content:
      `There is no direct public transport to Wallis Island. You may arrange your own transportation through a variety of options:
- Fly to Taree Airport, New Castle or Sydney Airport then drive to Coomba Park
- Water Taxi from Coomba Park or Forster (more in Q&A section)
- Private Plane or Helicopter (please advise us)
- Private Boat
Alternatively, Sydney Domestic Airport has a helicopter service that can take you directly to the Château Le Marais.
There’s no private parking at the Coomba Park Wharf but you can park your car in a free spot on the public parking space or on the street.
There is a public wharf at Coomba Park where you can moor your boat, usually not more than two days subject to local council regulations.`,
  },
  {
    title: 'Cleaning & Concierge Services',
    content:
      `The property will be thoroughly cleaned before arrival and after departure. Cleaning services can also be offered during longer stays (twice per week at an additional charge of $800 +GST subject to quotes).
Food and Chef services can also be organised at an additional cost (subject to availability and notice).
There is a grocery shop and petrol station 10 minutes walking distance from the Coomba Park Wharf. At Kirribilli Ave, Coomba Park, 2428 NSW, Phone 02 6554 2097.
Or you may drive 30 mins to find two bigger grocery shops & petrol stations.`
  },
  {
    title: 'Appliances',
    content:
      `Air conditioning: Adjust with remote controls in bedrooms 1-4.
Washer and Dryer: Located in the laundry room on the ground floor. Manuals are on the table.
Coffee Machine: Manual is in the first drawer under the coffee table.
Dish washer: Two units—main kitchen and bar area.
Kitchen: See details in following section.`,
  },
  {
    title: 'Kitchen',
    content:
      `2 Microwaves, 2 Fridges (bar area and main kitchen), Dishes & utensils, Dishwasher, Toaster, Oven (main Kitchen), BBQ, Kettle, Outdoor kitchen stove, Pots and pans, Pantry, Pizza oven (outdoor).
Do not use the kettle and portable electric stove at the same time to avoid overloading the power board.`
  },
  {
    title: 'Windows and Doors',
    content:
      `Windows slide vertically. Locks are reversed compared to typical Australian doors.
Ensure all doors and windows are closed and locked when leaving to avoid damage from weather or wildlife.`,
  },
  {
    title: 'Insurance',
    content:
      `Due to the nature of the property. Personal indemnity insurance is mandatory for all guests.
As we are off-grid and isolated from the mainland, please understand any response from emergency services may be delayed.`
  },
  {
    title: 'Smoke Alarms',
    content:
      `There are smoke alarms and fire extinguishers throughout the property. Please read and follow fire safety rules in the Guest Manual.`
  },
  {
    title: 'Cancellations',
    content:
      `A 24-hour cancellation notice policy stands. Please ensure notice is given at least 24-hours before your booking. If not, you will be charged 100% of your stay.`
  }
];

const faqItems = [
  {
    question: 'How do I get to Wallis Island?',
    answer: `As stated above in the [Transportation] Section.

Here's some contact info for transportation providers:
- Sydney HeliTours: Sydney Airport, 472 Ross Smith Ave, Mascot NSW 2020 (P:0293173402) 355R+PH Mascot, New South Wales. Price: Eurocopter EC130 Approx $5,600 ($440/ph for waiting inc GST). From Cessnock Airport or Sydney Airport: 1 hour 10 minutes (subject to air traffic control at Williamstown).
- The nearest Wharf: Coomba Park Public Wharf QF7F+WF Coomba Park, New South Wales. Once you arrive at Coomba Park Public Wharf you can park before getting on the water taxi to Wallis Island. 5 minutes from Coomba park to the house on Wallis Island by boat.
- Port Macquarie Water Jet: You can also book a seaplane that goes straight to the jetty at Wallis Island http://portmacquarieseaplanes.com.au/
- Forster Aussie Boatshed rental boat company (Provide Water Taxi Service): www.aussieboatshed.com.au, 11-13 Little St Forster, NSW 2428. 25 minutes from Forster to the house on Wallis Island by boat. RG66+HC Forster, New South Wales.

For more information please contact us.`
  },
  {
    question: 'Is the property off-grid? How does it access water and electricity?',
    answer: `Yes, the property is off-grid. The Chateau Le Marais aims to fulfil its role in climate change and protecting the environment around us. As a result, we aim to primarily rely on Solar energy to power our facilities.

If there is no sun on the day or it’s an overcast/raining day, we do have a backup generator that will automatically turn on.

All water on the property is safe to drink as it passes through our Puretec filters and pipes to our taps. We collect rainwater through our roof gutters to ensure our property is as green as possible!

Shower water temperature may be inconsistent at times in accordance with the weather. On sunny days there should be no issues. On overcast or rainy days please be aware that the water may not be as hot. The backup generator can only provide so much. As the property has a limited amount of water tanks, please be mindful when using showers and bathtubs.`
  },
  {
    question: 'What happens if I am hurt? Or there is an emergency?',
    answer: `Should you encounter any sort of emergency during your stay, please contact the local authorities immediately.
Emergency phone number: 02 6555 1299 or 000.

Please note: You are on an isolated island. The response time from emergency services will vary depending on availability, weather conditions and other factors.

There are a number of fire extinguishers located in each level of the house:
- Underground floor tool room
- Storage room in the kitchen
- First corridor on the first floor
- BBQ Area

There is a first aid kit in the cabinet near the kitchen area. Please return it to the same area after use.
Contact Information: manager@chateaulemarais.au John Du - 0413 168 533`
  },
  {
    question: 'How is the property heated? Please provide some Fire Safety rules.',
    answer: `The property has 4 fireplaces (wood provided), fire starter, as well as a heater and air conditioning in each of the 5 bedrooms.

- PLEASE keep the fireplace door closed once you start the fire.
- Keep the fire starter in a safe place away from the fireplace.
- Turn off the fireplace, heaters and air-conditioning when not in use.
- Fire extinguishers on each floor and fire alarms.
- Ensure flammable items are handled with care (fire starter, gas tanks, etc.). Do not leave them unsupervised.`
  },
  {
    question: 'Can I bring my own sporting and recreational goods?',
    answer: `Yes, you are allowed to bring balls, fishing rods, bikes, etc.
Please be careful when playing and do not play near the property (Lot 1 premier zone). You are responsible for any damages.
You can play at Lot 2 closer to the foreshore land. Do not use quad bikes or similar near the property due to potential damage.`
  },
  {
    question: 'How is waste disposal managed?',
    answer: `As we are on a nature reserve, we strive to keep it clean and protected. Your cooperation is appreciated.

- General rubbish and recycling should be split and taken with you.
- Coomba Park wharf and Forster have recycling and general waste bins.
- Do not leave rubbish on the property—it attracts wildlife.
- Use the large bin near the BBQ area and close it after use.`
  },
  {
    question: 'What kind of wildlife is there on the property? Are there sights to see and things to do on this island?',
    answer: `Be cautious and aware of wildlife and potential hazards. Animals you may encounter include:
- Snakes, Birds, Frogs, Koalas, Mice, Bats, Wild foxes, Feral cats, Wild dogs, Rusa deer

Any interaction with wildlife is at your own risk and discretion.

Things to do:
- Fishing, Golf Practice, Hiking, Watersports, Birdwatching, Dolphin watching
- Orchard fruit-picking, Beaches, Miles Island, Tallwoods Country Club, Scenic flights, Harrington Beach, Kayak tour on Myall River, Myall Lakes National Park, Crowdy Head, Wallingat National Park

Services:
- Forster Marina Boat Rental: https://www.forstermarina.com.au/
- Private Chef and Yoga: https://www.nourishedsoulsanctum.com.au/
- Coomba Aquatic Club: https://www.coombaaquatic.club/ (P: 0402940140)
- Amaroo Cruises: https://drive.google.com/file/d/1FRApRqQPXLpzJMDGOUO2of3t_Oc-IyYK/view?pli=1`
  }
];


export default GuestInformation;
