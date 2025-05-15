import React, { useState } from 'react';
import { Search, Heart, ChevronLeft, ChevronRight, ArrowUpCircle, ArrowRight } from 'lucide-react';

const Page5 = () => {
  const [favorites, setFavorites] = useState({});
  
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample tour data
  const tours = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxLa3uS5cqsKXCGRZsBJ5FrioEz-8GLIygKELOi2Dk0=",
      location: "Bangkok, Thailand",
      name: "Dusitd2 Samyan Bangkok",
      days: 3,
      nights: 2,
      persons: 2,
      price: 95,
      rating: 4.7,
      reviews: 20
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1746382320087-4a33931b0fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXIlMjBhbmQlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
      location: "Bangkok, Thailand",
      name: "Dusitd2 Samyan Bangkok",
      days: 3,
      nights: 2,
      persons: 2,
      price: 95,
      rating: 4.7,
      reviews: 20
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxLa3uS5cqsKXCGRZsBJ5FrioEz-8GLIygKELOi2Dk0=",
      location: "Bangkok, Thailand",
      name: "Dusitd2 Samyan Bangkok",
      days: 3,
      nights: 2,
      persons: 2,
      price: 95,
      rating: 4.7,
      reviews: 20
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxLa3uS5cqsKXCGRZsBJ5FrioEz-8GLIygKELOi2Dk0=",
      location: "Bangkok, Thailand",
      name: "Dusitd2 Samyan Bangkok",
      days: 3,
      nights: 2,
      persons: 2,
      price: 95,
      rating: 4.7,
      reviews: 20
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1746382320087-4a33931b0fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXIlMjBhbmQlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
      location: "Bangkok, Thailand",
      name: "Dusitd2 Samyan Bangkok",
      days: 3,
      nights: 2,
      persons: 2,
      price: 95,
      rating: 4.7,
      reviews: 20
    }
  ];

  // Navigation logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= tours.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? tours.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#e8f2f2] font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-[#ff6b6b] font-medium mb-2">Features Tour</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Most Favorite Tour Place<br />In The World
          </h1>
        </div>

        {/* Tour Cards Section */}
        <div className="relative">
          {/* Carousel Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none md:-left-5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / (tours.length - 3))}%)` }}
            >
              {tours.map((tour) => (
                <div 
                  key={tour.id} 
                  className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[280px] flex-shrink-0 mx-2 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                      <img 
                        src={tour.image} 
                        alt={tour.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-0 left-0 p-2 flex justify-between items-center w-full">
                        <span className="bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded">
                          Featured
                        </span>
                        <button 
                          onClick={() => toggleFavorite(tour.id)}
                          className={`p-1.5 rounded-full ${
                            favorites[tour.id] ? 'bg-[#ff6b6b] text-white' : 'bg-white text-gray-400 hover:text-[#ff6b6b]'
                          } transition-colors duration-200 focus:outline-none`}
                          aria-label={favorites[tour.id] ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Heart className="h-4 w-4" fill={favorites[tour.id] ? "#ffffff" : "none"} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-[#10b981] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-[#10b981] text-sm">{tour.location}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{tour.name}</h3>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tour.days} Days {tour.nights} Night
                        </div>
                        
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {tour.persons} Person
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-500 text-sm">From</span>
                          <p className="text-gray-900 font-bold">${tour.price}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-gray-700 text-sm">{tour.rating} ({tour.reviews} Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none md:-right-5"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-[#10b981] text-white font-medium rounded-full shadow-md hover:bg-[#0d9668] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981]"
          >
            View All Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="h-6 w-6 text-[#10b981]" />
      </button>
    </div>
  );
};

export default Page5;