import React from 'react';
import { Plane } from 'lucide-react';

const routes = [
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'Sylhet', airport: 'Osmani International' } },
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'kolkata', airport: 'kolkata Airport' } },
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'India', airport: 'Shah Amarat Inter' } },
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'India', airport: 'Shah Amarat Inter' } },
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'canada', airport: 'canada Airport' } },
  { from: { city: 'USA', airport: 'Istanbul Airport' }, to: { city: 'kolkata', airport: 'kolkata Airport' } },
];

const stats = [
  { value: '150k', label: 'Happy Traveler' },
  { value: '95.7%', label: 'Satisfaction Rate' },
  { value: '5000+', label: 'Tour Completed' },
];

const Page4 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Popular Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {routes.map((route, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium">{route.from.city}</div>
                    <div className="text-sm text-gray-500">{route.from.airport}</div>
                  </div>
                  <div>
                    <div className="font-medium">{route.to.city}</div>
                    <div className="text-sm text-gray-500">{route.to.airport}</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="border-t-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <Plane className="text-teal-600 rotate-90" size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-coral-500 font-medium mb-2">About Us</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get The Best Travel Experience With Travello
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures, and landscapes. It is a fundamental human activity that has been practiced for centuries and continues to be a source of joy, learning, and personal growth.
              </p>
              <p>
                Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures.
              </p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <div className="mt-8 flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs">X</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold">2,500</span> People Booked Tomorrow Land Event in the Last 24 hours
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1131877134/photo/travel-illustration-worlds-famous-landmarks-and-tourist-destinations-elements-in-colorful.webp?a=1&b=1&s=612x612&w=0&k=20&c=XqTSlFIMzvGQYACK4L5UDE_ypXtvtg56ubTFRflaQjo="
              alt="Friends enjoying travel"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 rounded-b-lg">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;