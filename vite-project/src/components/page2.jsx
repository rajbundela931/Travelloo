import React, { useState } from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const cities = ['London', 'Bangkok', 'Hong Kong', 'Manchester', 'Dubai'];

const tourPackages = [
  {
    id: 1,
    title: 'Dusitd2 Samyan Bangkok',
    location: { city: 'Bangkok', country: 'Thailand' },
    image: 'https://images.unsplash.com/photo-1625291328217-e04eb671c5d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGFuZCUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    duration: '3 Days 2 Night',
    persons: '2 Person',
    price: 95,
    rating: 4.7,
    reviews: 20,
    featured: true
  },
  {
    id: 2,
    title: 'Dusitd2 Samyan Bangkok',
    location: { city: 'Bangkok', country: 'Thailand' },
    image: 'https://images.unsplash.com/photo-1625291328217-e04eb671c5d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGFuZCUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    duration: '3 Days 2 Night',
    persons: '2 Person',
    price: 95,
    rating: 4.7,
    reviews: 20,
    featured: true
  },
  {
    id: 3,
    title: 'Dusitd2 Samyan Bangkok',
    location: { city: 'Bangkok', country: 'Thailand' },
    image: 'https://images.unsplash.com/photo-1625291328217-e04eb671c5d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGFuZCUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    duration: '3 Days 2 Night',
    persons: '2 Person',
    price: 95,
    rating: 4.7,
    reviews: 20,
    featured: true
  },
  {
    id: 4,
    title: 'Dusitd2 Samyan Bangkok',
    location: { city: 'Bangkok', country: 'Thailand' },
    image: 'https://images.unsplash.com/photo-1625291328217-e04eb671c5d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGFuZCUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    duration: '3 Days 2 Night',
    persons: '2 Person',
    price: 95,
    rating: 4.7,
    reviews: 20,
    featured: true
  }
];

const Page2 = () => {
  const [selectedCity, setSelectedCity] = useState('London');

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-coral-500 font-medium mb-2">Popular Packages</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Most Favorite Tour Place
            <br />
            In The World
          </h2>

          {/* City Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCity === city
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                {tour.featured && (
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-teal-600" />
                  <span className="text-sm text-gray-600">
                    {tour.location.city}, {tour.location.country}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tour.title}
                </h3>

                {/* Details */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{tour.persons}</span>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">From</span>
                    <span className="text-xl font-bold text-gray-900 ml-2">
                      ${tour.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({tour.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300">
            View All Tour
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
        </div>
      </div>
    </div>
  );
};

export default Page2;