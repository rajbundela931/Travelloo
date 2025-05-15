import React from 'react';
import { ArrowRight, ArrowUp, Check } from 'lucide-react';

const Page10 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-sans">
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F8F7F1]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium mb-2">Package Pricing Plan</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simply Choose The Pricing Plan</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">That Fits You Best</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Best for personal and basic needs</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-gray-600 ml-2">One-time payment</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>20+ Partners</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Mass Messaging</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-300 mr-2" size={20} />
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-300 mr-2" size={20} />
                  <span>Online booking engine</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-300 mr-2" size={20} />
                  <span>Business Card Scanner</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center group">
                Try Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">Per month +2% per online Booking</p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 right-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">Best for personal and basic needs</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$77</span>
                <span className="text-gray-600 ml-2">One-time payment</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>20+ Partners</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Mass Messaging</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Online booking engine</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-300 mr-2" size={20} />
                  <span>Business Card Scanner</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center group">
                Try Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">Per month +1.9% per online Booking</p>
            </div>

            {/* Custom Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-gray-600 mb-6">Best for personal and basic needs</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Mass Messaging</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Unlimited Everything</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Online booking engine</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-teal-500 mr-2" size={20} />
                  <span>Business Card Scanner</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center group">
                Contact
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">Please contact anytime</p>
            </div>
          </div>
        </div>
      </section>

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

export default Page10;