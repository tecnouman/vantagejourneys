import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const travelImages = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % travelImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, travelImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % travelImages.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + travelImages.length) % travelImages.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div
      className="relative w-full h-[560px] md:h-[640px] lg:h-[720px] bg-[#1a1a1a] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('${travelImages[currentSlide]}')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/25 to-[#1a1a1a]/65 pointer-events-none" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goToPreviousSlide}
        className="absolute left-3 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20 border border-white/20 pointer-events-auto cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goToNextSlide}
        className="absolute right-3 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20 border border-white/20 pointer-events-auto cursor-pointer"
      >
        <ArrowRight size={20} />
      </button>

      <div className="absolute left-[15%] top-[40%] text-white/30 hidden lg:block z-0 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 30L20 70L60 90L120 30Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M60 90L70 120L85 95" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M100 130 C 80 150, 30 140, 40 100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      <div className="absolute right-[20%] bottom-[25%] text-white/30 hidden lg:block z-0 pointer-events-none">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80 L60 60 L100 70 L140 50 L150 60 L110 85 L90 105 Z" fill="currentColor" opacity="0.5" />
          <path d="M20 120 C 50 140, 100 150, 160 110" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          <path d="M155 105 L165 110 L155 118" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto w-full px-4 md:px-8 flex flex-col items-center justify-center text-center -translate-y-10 md:-translate-y-14">
        <h2 className="text-[#ff5a36] font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
          Travel & Tour Agency
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight max-w-5xl drop-shadow-lg">
          "YOUR JOURNEY ,<br /> OUR PASSION"
        </h1>
      </div>

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {travelImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
