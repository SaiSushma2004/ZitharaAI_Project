import React, { useState } from 'react';
import { Crown, Search, X, Star, TrendingUp } from 'lucide-react';
import ChatAssistant from './ChatAssitant';

// Popular jewelry items
const popularJewelry = [
  {
    id: 1,
    name: "Diamond Solitaire Necklace",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800",
    price: "₹75,000",
    rating: 4.9,
    category: "Diamond"
  },
  {
    id: 2,
    name: "Traditional Gold Bangles",
    image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800",
    price: "₹1,25,000",
    rating: 4.8,
    category: "Gold"
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    price: "₹15,000",
    rating: 4.7,
    category: "Pearl"
  }
];

// Jewelry website recommendations based on categories
const websiteRecommendations = {
  gold: [
    { name: 'Tanishq', url: 'https://www.tanishq.co.in' },
    { name: 'Malabar Gold', url: 'https://www.malabargoldanddiamonds.com' },
    { name: 'CaratLane', url: 'https://www.caratlane.com' }
  ],
  diamond: [
    { name: 'BlueStone', url: 'https://www.bluestone.com' },
    { name: 'CaratLane', url: 'https://www.caratlane.com' },
    { name: 'Orra', url: 'https://www.orra.co.in' }
  ],
  kundan: [
    { name: 'Tribe by Amrapali', url: 'https://www.tribebyamrapali.com' },
    { name: 'Tanishq', url: 'https://www.tanishq.co.in' },
    { name: 'Jaypore', url: 'https://www.jaypore.com' }
  ],
  meenakari: [
    { name: 'Jaypore', url: 'https://www.jaypore.com' },
    { name: 'Craftsvilla', url: 'https://www.craftsvilla.com' },
    { name: 'Voylla', url: 'https://www.voylla.com' }
  ],
  pearl: [
    { name: 'CaratLane', url: 'https://www.caratlane.com' },
    { name: 'BlueStone', url: 'https://www.bluestone.com' },
    { name: 'PearlsOnly', url: 'https://www.pearlsonly.com' }
  ]
};

// Sample elegant jewelry images
const elegantJewelryImages = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800',
  'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800'
];

function App() {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [style, setStyle] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const recommendations = websiteRecommendations[category as keyof typeof websiteRecommendations] || [];
    
    const results = elegantJewelryImages.map((img, index) => ({
      id: index,
      image: img,
      category,
      price: priceRange,
      style,
      recommendations: recommendations
    }));
    
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-teal-50">
      {/* Header */}
      <header className="p-6 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="h-10 w-10 text-rose-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-serif">Zithara.AI</h1>
              <p className="text-sm text-gray-600 italic">Embrace the Quirks of Elegance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-teal-100 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Discover Your Perfect Jewelry
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Find exquisite pieces that match your style and elegance
            </p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Find Your Dream Jewelry</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 text-gray-700 py-3"
            >
              <option value="">Select Category</option>
              <option value="gold">Gold Jewelry</option>
              <option value="diamond">Diamond Jewelry</option>
              <option value="kundan">Kundan & Polki</option>
              <option value="meenakari">Meenakari</option>
              <option value="pearl">Pearl Jewelry</option>
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 text-gray-700 py-3"
            >
              <option value="">Price Range</option>
              <option value="0-5000">Under ₹5,000</option>
              <option value="5000-15000">₹5,000 - ₹15,000</option>
              <option value="15000-50000">₹15,000 - ₹50,000</option>
              <option value="50000+">Above ₹50,000</option>
            </select>

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 text-gray-700 py-3"
            >
              <option value="">Select Style</option>
              <option value="traditional">Traditional</option>
              <option value="modern">Modern</option>
              <option value="antique">Antique</option>
              <option value="contemporary">Contemporary</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
            disabled={loading}
          >
            <Search className="h-5 w-5" />
            <span className="text-lg">{loading ? 'Searching...' : 'Search Jewelry'}</span>
          </button>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center space-x-2 mb-8">
          <TrendingUp className="h-8 w-8 text-rose-600" />
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Most Popular Jewelry</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularJewelry.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition-transform duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-rose-600 font-semibold mb-2">{item.price}</p>
                <p className="text-sm text-gray-600">{item.category} Collection</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition-transform duration-300">
                <img
                  src={result.image}
                  alt="Jewelry"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {result.category} Jewelry
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{result.style} Style</p>
                  <p className="text-sm text-gray-600 mb-4">Price Range: {result.priceRange}</p>
                  
                  {result.recommendations && result.recommendations.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Available at:</h4>
                      <div className="space-y-2">
                        {result.recommendations.map((rec: any, index: number) => (
                          <a
                            key={index}
                            href={rec.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-rose-600 hover:text-rose-700 hover:underline"
                          >
                            {rec.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
{/* chat  */}
<ChatAssistant/>
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2024 Zithara.AI - Discover Elegance</p>
        </div>
      </footer>
    </div>
  );
}

export default App;