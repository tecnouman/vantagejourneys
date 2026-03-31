import { Check, Star, Plane } from 'lucide-react';

const whyChooseUsFeatures = [
  "Trusted, Local Travel Experts",
  "Flexible, Hassle-Free Bookings",
  "Real-Time Itinerary Updates",
  "100% Secure Payment"
];

export default function WhyChooseUs() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#ff5a36]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ffb703]/15 rounded-full blur-3xl -z-10"></div>

        <div className="relative z-10 w-full max-w-md lg:max-w-full rounded-[2.5rem] overflow-hidden p-2 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] transform hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"
            alt="Traveler on scooter"
            className="w-full h-auto rounded-4xl object-cover aspect-square lg:aspect-4/3"
          />
          <div className="absolute -right-4 top-1/4 bg-white p-3.5 rounded-full shadow-xl border border-gray-50 hidden sm:flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s' }}>
            <Star className="text-[#ffb703] fill-[#ffb703] w-6 h-6" />
          </div>
          <div className="absolute -left-4 bottom-1/4 bg-white p-3 rounded-full shadow-xl border border-gray-50 hidden sm:flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Plane className="text-[#5d58d8] fill-[#5d58d8] w-5 h-5 -rotate-45" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <span className="text-[#ff5a36] font-semibold text-lg tracking-wide mb-3 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#ff5a36]"></span>
          Why Choose Us
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] leading-[1.15] mb-6">
          Book In Advance To<br />Avoid The Rush
        </h2>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
          Amet consectetur adipiscing elit. Aliquam elementum, purus a dignissim volutpat, sapien purus dictum metus, nec faucibus enim arcu quis odio. Phasellus euismod scelerisque.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10 w-full">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ff5a36] flex items-center justify-center shrink-0 shadow-sm">
                <Check size={14} className="text-white" strokeWidth={3.5} />
              </div>
              <span className="text-[#111827] font-bold text-[15px]">{feature}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#ff5a36] hover:bg-[#e04a29] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-2">
          More About Travil
        </button>
      </div>
    </div>
  );
}
