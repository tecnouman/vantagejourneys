import { ArrowRight, ArrowUpRight } from 'lucide-react';

const destinations = [
  { city: 'Thimpu', country: 'Bhutan', image: 'https://images.unsplash.com/photo-1623146465057-7988880696cb?w=800&q=80' },
  { city: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80' },
  { city: 'Cusco', country: 'Peru', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80' },
  { city: 'Vienna', country: 'Australia', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80' },
  { city: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80' },
  { city: 'Zagreb', country: 'Croatia', image: 'https://images.unsplash.com/photo-1550503023-e18e8df5e977?w=800&q=80' },
];

export default function DestinationsSection() {
  return (
    <section className="w-full bg-white pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-5 md:gap-0">
          <div className="max-w-2xl">
            <h3 className="text-[#5b4cc4] font-medium text-base md:text-lg mb-1 tracking-wide">Travel Destinations</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Trendy Travel Locations</h2>
          </div>
          <button className="group flex items-center bg-[#5b4cc4] hover:bg-[#ff5a36] transition-colors duration-300 text-white font-medium pl-5 pr-2 py-2 rounded-full shadow-md cursor-pointer">
            <span className="mr-3">Explore More</span>
            <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-sm">
              <ArrowRight size={18} className="text-gray-800" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="relative h-[260px] md:h-[280px] rounded-4xl overflow-hidden group cursor-pointer shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-[#5b4cc4]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                <div className="w-10 h-10 bg-white hover:bg-[#ff5a36] text-gray-800 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="absolute bottom-5 left-5 z-10">
                <div className="bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-gray-900 shadow-md">
                  {dest.city}, {dest.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
