import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Page9 = () => {
  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-sans">
      {/* Main News Section */}
      <main className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* News & Articles Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-400 italic font-medium mb-2">News & Article</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto">
            Latest News & Articles From The Blog Posts
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Article Card 1 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://media.istockphoto.com/id/1372104701/photo/tourist-in-agra-india.jpg?s=612x612&w=0&k=20&c=he9pHg6hmdU5XsBkNnmzd4Q7PBXDMTCZ4n_pO5eaXKs=" 
                alt="Harbor with boats" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-teal-600 font-medium text-sm">Tour Guide</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">
                The World is a Book and Those Who do not Travel Read Only One Page.
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Author 1" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/43.jpg" 
                    alt="Author 2" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Author 3" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                </div>
                <span className="text-gray-500 text-sm">10 Min Read</span>
              </div>
            </div>
          </article>

          {/* Article Card 2 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://media.istockphoto.com/id/1372104701/photo/tourist-in-agra-india.jpg?s=612x612&w=0&k=20&c=he9pHg6hmdU5XsBkNnmzd4Q7PBXDMTCZ4n_pO5eaXKs=" 
                alt="Orange VW bus in mountains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-teal-600 font-medium text-sm">Tour Guide</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">
                The World is a Book and Those Who do not Travel Read Only One Page.
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Author 1" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/43.jpg" 
                    alt="Author 2" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Author 3" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                </div>
                <span className="text-gray-500 text-sm">10 Min Read</span>
              </div>
            </div>
          </article>

          {/* Article Card 3 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://media.istockphoto.com/id/1372104701/photo/tourist-in-agra-india.jpg?s=612x612&w=0&k=20&c=he9pHg6hmdU5XsBkNnmzd4Q7PBXDMTCZ4n_pO5eaXKs=" 
                alt="Blue VW bus with couple" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-teal-600 font-medium text-sm">Tour Guide</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">
                The World is a Book and Those Who do not Travel Read Only One Page.
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Author 1" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/43.jpg" 
                    alt="Author 2" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="Author 3" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                  />
                </div>
                <span className="text-gray-500 text-sm">10 Min Read</span>
              </div>
            </div>
          </article>
        </div>

        {/* View All News Button */}
        <div className="flex justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-300 group">
            View All News
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </button>
        </div>
      </main>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-teal-600 focus:outline-none"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Page9;