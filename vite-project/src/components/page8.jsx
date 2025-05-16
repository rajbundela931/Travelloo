import React from 'react';
import { Search, Star, Play } from 'lucide-react';

const Page8 = () => {

  const partners = [
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5eb] font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What People Have Said<br />About Our Service
          </h1>
        </div>

        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="David Malan" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">David Malan</h3>
                <p className="text-sm text-gray-600">Traveler</p>
              </div>
            </div>
            
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Et amet nulla in adipiscing. Donec tincidunt dui vel adipiscing sit turpis neque at cursus. Dignissim scelerisque mattis ultricies...
            </p>
            
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-semibold">Travello</span>
              <span className="text-gray-500">Jan 20, 2025</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg"
              alt="Video Testimonial"
              className="w-full h-[400px] object-cover"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-[#10b981]" />
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.image}
              alt={partner.name}
              className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page8;