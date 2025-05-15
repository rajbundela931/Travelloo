import React from 'react';
import { Search, Car, Music, Mountain, Umbrella, Fish } from 'lucide-react';

const Page7 = () => {

  const packageOptions = [
    { id: 1, name: "Fishing & Swimming", icon: Fish, active: true },
    { id: 2, name: "Music & Relaxing", icon: Music, active: false },
    { id: 3, name: "Trailers & Sports", icon: Car, active: false },
    { id: 4, name: "Mountain & Hill Hiking", icon: Mountain, active: false },
    { id: 5, name: "Paragliding Tours", icon: Umbrella, active: false },
    { id: 6, name: "Music & Relaxing", icon: Music, active: false },
    { id: 7, name: "Mountain & Hill Hiking", icon: Mountain, active: false },
    { id: 8, name: "Fishing & Swimming", icon: Fish, active: false },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-[#ff6b6b] font-medium mb-2">Explore The World</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Best Offer Package<br />For You
          </h1>
        </div>

        {/* Package Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-[#e8f2f2] rounded-xl p-6">
            <div className="space-y-3">
              {packageOptions.map((option) => (
                <button
                  key={option.id}
                  className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    option.active 
                      ? 'bg-[#10b981] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <option.icon className={`w-5 h-5 ${option.active ? 'text-white' : 'text-[#10b981]'}`} />
                  <span className="font-medium">{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column*/}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Trailers & Sports</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nullam amet at sed dui tellus tempor pretium tincidunt. Id amet sit viverra dolor consectetur elementum. Non at volutpat aliquam ac ac at amet. Ut semper semper sit aliquam penatibus dolor tortor nisl.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-[#10b981]">•</span>
                <span>Lorem ipsum dolor sit amet consectetur. Platea urna hendrerit dui eget velit sollicitudin orci. Non sit lorem dolor placerat faucibus.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#10b981]">•</span>
                <span>Lorem ipsum dolor sit amet consectetur. Platea urna hendrerit dui eget velit sollicitudin orci.</span>
              </li>
            </ul>
            <div className="mt-6">
              <img 
                src="https://media.istockphoto.com/id/1192229302/photo/bangalore-skyline-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=GBKeq-6FpB5IkuJPEA2azM3CCN3KvWdkndWpZq_Pq2s="
                alt="Travel Van"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page7;