import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  { text: "Trusted, Local Travel Experts", id: 1 },
  { text: "Flexible, Hassle-Free Bookings", id: 2 },
  { text: "Real-Time Itinerary Updates", id: 3 },
  { text: "Trusted, Local Travel Experts", id: 4 },
  { text: "Flexible, Hassle-Free Bookings", id: 5 },
  { text: "Real-Time Itinerary Updates", id: 6 },
];

export default function AboutSection() {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-4xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
          alt="Hiker with yellow backpack in mountains"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col space-y-6 lg:pl-4">
        <h3 className="text-[#5d58d8] font-medium text-lg tracking-wide">
          About Vantage Journey
        </h3>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#111827]">
          Vantage Journeys –<br />
          Memorable Adventures<br />
          Worldwide
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
          At Vantage Journeys, we offer carefully curated destinations and tours that capture the true
          essence of each location, ensuring you experience the best of your journey. Our attraction
          passes help you save more compared to buying individual tickets, making your tour
          packages both convenient and cost-effective.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-3 group cursor-pointer p-2 -ml-2 rounded-lg hover:bg-white/60 transition-all duration-300"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#ff5a36] rounded-full opacity-0 scale-50 group-hover:scale-150 group-hover:opacity-10 transition-all duration-300"></div>
                <CheckCircle2
                  className="text-[#5d58d8] group-hover:text-[#ff5a36] group-hover:scale-110 transition-all duration-300 relative z-10"
                  size={20}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-8 pt-4">
          <button className="group relative flex items-center gap-4 pl-6 pr-2 py-2 bg-[#5d58d8] hover:bg-[#ff5a36] text-white rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer">
            <span className="relative z-10 text-sm sm:text-base">More About Travil</span>
            <span className="relative z-10 bg-white text-[#5d58d8] group-hover:text-[#ff5a36] rounded-full p-2 transition-colors duration-500 shadow-sm">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>

          <div className="flex items-center">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-11 h-11 rounded-full border-2 border-[#f3f4f8] object-cover" />
              <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-11 h-11 rounded-full border-2 border-[#f3f4f8] object-cover" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-11 h-11 rounded-full border-2 border-[#f3f4f8] object-cover" />
              <div className="w-11 h-11 rounded-full border-2 border-[#f3f4f8] bg-[#ff5a36] text-white flex items-center justify-center text-xs font-bold z-10">
                8K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
