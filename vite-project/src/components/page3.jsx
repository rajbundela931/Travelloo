import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';

const Page3 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-sans">
      {/* Main Content */}
      <main className="px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">To Inspire You</h1>

        {/* Banner Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Explore Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[url('https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative p-8 min-h-[300px] flex flex-col justify-between">
              <div>
                <p className="text-coral-500 font-semibold mb-2">Save Up To</p>
                <h2 className="text-white text-6xl font-bold mb-4">50%</h2>
                <h3 className="text-white text-2xl font-semibold mb-2">Let's Explore The World</h3>
                <div className="flex items-center text-white mb-4">
                  <MapPin size={20} className="mr-2" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
              <button className="bg-coral-500 text-white px-6 py-3 rounded-lg hover:bg-coral-600 transition-colors w-fit">
                Booking Now
              </button>
            </div>
          </div>

          {/* Hotel Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative p-8 min-h-[300px] flex flex-col justify-between">
              <div>
                <h2 className="text-white text-4xl font-bold mb-2">Nearby</h2>
                <h3 className="text-white text-4xl font-bold mb-4">Hotel</h3>
                <p className="text-white text-xl mb-2">Up to <span className="text-coral-500">50% Off</span></p>
                <div className="flex items-center text-white mb-4">
                  <MapPin size={20} className="mr-2" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
              <button className="bg-coral-500 text-white px-6 py-3 rounded-lg hover:bg-coral-600 transition-colors w-fit">
                Booking Now
              </button>
            </div>
          </div>
        </div>

        {/* Tour Section */}
        <div className="text-center mb-12">
          <p className="text-coral-500 italic mb-4">Enjoy Trip</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Top Domestic & International Tour</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full">Domestic</button>
            <button className="text-gray-700 hover:text-teal-600 px-6 py-2 rounded-full transition-colors">
              International
            </button>
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Page3;