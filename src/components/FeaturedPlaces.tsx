import { Calendar, Flag } from 'lucide-react';

const tourPlaces = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
    location: "Makalu Region",
    title: "Mountains And Lakes",
    price: 1500,
    originalPrice: null as number | null,
    duration: "4 Days / 5 Night",
    countries: "2 Countries"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1533104816-c725514f7b60?q=80&w=800&auto=format&fit=crop",
    location: "Nepal, Kathmandu",
    title: "Trip Bustling Market",
    price: 1200,
    originalPrice: 1600,
    duration: "6 Days / 5 Night",
    countries: "4 Countries"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    location: "Bangladesh",
    title: "Uncover Vibrant Culture",
    price: 1050,
    originalPrice: 1500,
    duration: "5 Days / 5 Night",
    countries: "2 Countries"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=800&auto=format&fit=crop",
    location: "Bangladesh",
    title: "Langtang Valley Trekking",
    price: 376,
    originalPrice: 999,
    duration: "4 Days / 5 Night",
    countries: "2 Countries"
  }
];

export default function FeaturedPlaces() {
  return (
    <div className="w-full bg-white/60 rounded-t-[3rem] py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-12">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#5d58d8] font-medium text-lg tracking-wide mb-2">
            Featured Places
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
            Amazing Tour Places
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {tourPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-50 flex flex-col group cursor-pointer"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <span className="text-[#5d58d8] text-[13px] font-semibold mb-1">
                  {place.location}
                </span>

                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
                  {place.title}
                </h4>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-gray-500 text-sm">From</span>
                  <span className="text-[#5d58d8] font-bold text-xl">${place.price}</span>
                  {place.originalPrice && (
                    <span className="line-through text-gray-400 text-sm ml-1">
                      ${place.originalPrice}
                    </span>
                  )}
                </div>

                <div className="border-t border-dashed border-gray-200 my-4"></div>

                <div className="flex justify-between items-center text-[13px] text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#ff5a36]" strokeWidth={2.5} />
                    <span>{place.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flag className="w-4 h-4 text-[#ff5a36]" strokeWidth={2.5} />
                    <span>{place.countries}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
