import React from 'react';

const topics = [
  { name: 'Accommodation', symbol: '🏠', description: 'Enjoy premium lodging amidst nature, ensuring rejuvenating stays during your adventure-packed hunting expedition.', link: '/services/accommodation' },
  { name: 'Service Includes', symbol: '🛡️', description: 'Our comprehensive offerings encompass lodging, meals, transport, and expert guidance, guaranteeing a memorable hunting', link: '/services/serviceIncludes' },
  { name: "What's Not Included", symbol: '🚫', description: 'Personalize your trip with optional extras like special tours and photography sessions', link: '/services/whatNotIncluded' },
  { name: 'Itinerary', symbol: '🗓️', description: 'Discover our carefully planned schedules for the ultimate hunting experience', link: '/services/itinerary' },
  { name: 'Trophy to Expect', symbol: '🏆', description: ' Find out what kind of trophies you can expect, making your hunt even more exciting', link: '/services/trophyToExpect' },
  { name: 'Preferred Timing', symbol: '⏳', description: 'Pick the perfect season for hunting success and great weather.', link: '/services/preferredTiming' },
  { name: 'Good Food and Easy Travel', symbol: '🍽️🚗', description: 'Enjoy delicious meals and smooth travel arrangements during your trip', link: '/services/foodTravel' },
  { name: 'List of Hunting Regions', symbol: '🌍', description: 'Explore different hunting spots, each with its own wildlife and terrain', link: '/services/huntingRegion' },
  { name: 'Success Rate', symbol: '📈', description: 'Learn about our track record and choose a trip duration that suits you best', link: '/services/sucessRate' },
  { name: 'Price Information', symbol: '💰', description: "No surprises – know exactly what you're paying for upfront, making planning easy.", link: '/services/priceInformation' },
  // Add more topics here
];

export default function Services() {
  return (
    <div className="bg-gray-100 py-12 pt-24 pb-44" >
      <h2 className='text-center pb-8 font-bold text-2xl'>Discover Your Ultimate Hunting Experience with Our Premier Services</h2>
      <p className='pr-10 pl-10 sm:pr-40 sm:pl-40 pb-20 text-center text-lg'>Unlock the wilderness and embrace the thrill 
        of the hunt with our tailored services. From 
        luxurious accommodations to expert-led expeditions,
         we ensure an unparalleled adventure amidst nature&apos;s grandeur. 
         Explore diverse terrains, track legendary game, and create lasting
          memories with our seasoned guides. With transparent pricing and
           customizable options, your dream hunt awaits. Plan your 
           expedition today and embark on a journey of discovery with us.</p>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <div key={topic.name} className="bg-white rounded-2xl shadow-2xl p-6 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between items-center">
              <div className="text-center">
                <div className="mb-6 text-4xl" aria-label={topic.name}>{topic.symbol}</div>
                <div className="mb-2 text-lg font-semibold text-center">{topic.name}</div>
                <div className="text-sm text-gray-700 text-center">{topic.description}</div>
              </div>
              <a href={topic.link} className=" bg-slate-700 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
