import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I Booked My Hotel And Flights For Thailand Through Them, And Honestly, Everything Was Perfectly Managed From Arrival To Departure. Highly Reliable Service!",
    name: "Daniyal",
    location: "UK",
  },
  {
    id: 2,
    text: "The Custom Travel Package For Japan Was Exactly What I Wanted Affordable, Well-Organized, And Full Of Unforgettable Experiences. They Really Know How To Plan!",
    name: "Abdul Aziz",
    location: "Japan",
  },
  {
    id: 3,
    text: "Amazing Experience From Start To Finish. The Team Was Incredibly Responsive And Helped Us Plan The Perfect Honeymoon In Bali. Would Recommend To Everyone!",
    name: "Sarah Miller",
    location: "Australia",
  },
  {
    id: 4,
    text: "Their Attention To Detail Is Unmatched. Every Hotel, Every Transfer, Every Tour Was Exactly As Promised. Five Stars All The Way!",
    name: "Omar Hassan",
    location: "UAE",
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.72 6C10.08 10.08 4.8 17.76 4.8 26.16C4.8 33.36 9.36 38.4 15.12 38.4C20.16 38.4 23.76 34.56 23.76 29.76C23.76 25.2 20.64 21.84 16.56 21.84C15.6 21.84 14.88 22.08 13.92 22.32C14.88 17.28 18.96 12.48 24 9.84L18.72 6ZM42.72 6C34.08 10.08 28.8 17.76 28.8 26.16C28.8 33.36 33.36 38.4 39.12 38.4C44.16 38.4 47.76 34.56 47.76 29.76C47.76 25.2 44.64 21.84 40.56 21.84C39.6 21.84 38.88 22.08 37.92 22.32C38.88 17.28 42.96 12.48 48 9.84L42.72 6Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const handleNext = () => setPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleCards = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <div className="w-full bg-[#f3f4f8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#5b3cc4] font-semibold text-base tracking-wide mb-3 block">
            Our Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-tight">
            Real Feedback From Our Happy<br />Customers Worldwide
          </h2>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute -left-5 z-10 w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5b3cc4]/30 active:scale-95 max-lg:hidden cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCards.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed mb-8">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <span className="text-gray-400 text-sm">{testimonial.location}</span>
                  </div>
                  <QuoteIcon className="text-[#5b3cc4] opacity-80 w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-5 z-10 w-11 h-11 rounded-full bg-[#5b3cc4] flex items-center justify-center text-white hover:bg-[#4a2fb3] transition-all duration-200 shadow-md shadow-[#5b3cc4]/30 focus:outline-none focus:ring-2 focus:ring-[#5b3cc4]/40 active:scale-95 max-lg:hidden cursor-pointer"
            aria-label="Next testimonials"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 lg:hidden">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all duration-200 shadow-sm focus:outline-none active:scale-95 cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-[#5b3cc4] flex items-center justify-center text-white hover:bg-[#4a2fb3] transition-all duration-200 shadow-md shadow-[#5b3cc4]/30 focus:outline-none active:scale-95 cursor-pointer"
            aria-label="Next testimonials"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
