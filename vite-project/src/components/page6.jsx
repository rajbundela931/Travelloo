import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Page6 = () => {
  const destinations = [
    {
      id: 1,
      country: "Spain",
      location: "Malaga View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg"
    },
    {
      id: 2,
      country: "Spain",
      location: "Malaga View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg"
    },
    {
      id: 3,
      country: "Spain",
      location: "Malaga View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg"
    },
    {
      id: 4,
      country: "Switzerland",
      location: "Zurich View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg"
    },
    {
      id: 5,
      country: "Australia",
      location: "Melbourne View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg"
    },
    {
      id: 6,
      country: "Canada",
      location: "Toronto View",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5eb] font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-[#ff6b6b] font-medium mb-2">Destination List</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Explore The Beautiful<br />Places Around World
          </h1>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={destination.image} 
                alt={destination.location} 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="flex items-center bg-white rounded-full px-3 py-1 space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-1">{destination.country}</h3>
                <div className="flex items-center text-white/90 text-sm">
                  <svg 
                    className="w-4 h-4 mr-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  {destination.location}
                </div>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page6;