import React from 'react';
import { ArrowRight, ArrowUp, Mail, Phone } from 'lucide-react';

const Page11 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-sans">
      {/* Footer Section */}
      <footer className="bg-[#0B1517] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Faq</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Explore Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Faq</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Tour Listings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Destination</a></li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <p className="text-gray-400">70/A Floor Divo Tower Melbourne, Australia</p>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={18} />
                  <span>(00) +888 123456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={18} />
                  <span>example@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-white rounded-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-black text-2xl font-bold mb-2">Travello</h2>
                <p className="text-gray-600 max-w-md">
                  Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures, and landscapes.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-black text-xl font-semibold mb-4">Subscribe Our Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow"
                  />
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-teal-500 transition-colors">Terms of usa</a>
                <a href="#" className="hover:text-teal-500 transition-colors">Privacy and Cookies Statement</a>
                <a href="#" className="hover:text-teal-500 transition-colors">How the site works</a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>© 2025 initTheme. All rights reserved</span>
                <span>Powered by @Travello</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

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

export default Page11;