import { useState, useRef, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';

const hotDeals = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
    price: 570,
    originalPrice: 499,
    title: "Annapurna Circuit Trek With Tilicho Lake",
    location: "132, Tic St, Wingston, New York 12401",
    duration: "4 Days / 5 Night",
    reviews: 10
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516483638261-f4dafaf00bc2?q=80&w=800&auto=format&fit=crop",
    price: 1200,
    originalPrice: 1600,
    title: "Experience Bustling Markets And Palaces",
    location: "132, Tic St, Wingston, New York 12401",
    duration: "4 Days / 5 Night",
    reviews: 20
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop",
    price: 900,
    originalPrice: 1100,
    title: "Tibet Lhasa Tour With Everest Base Camp",
    location: "132, Tic St, Wingston, New York 12401",
    duration: "4 Days / 5 Night",
    reviews: 15
  }
];

export default function HotDeals() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const infiniteDeals = [...hotDeals, ...hotDeals, ...hotDeals, ...hotDeals];

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const firstCard = sliderRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 24;
      sliderRef.current.scrollLeft = cardWidth * hotDeals.length;
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    if (!isDragging && !isHovered) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const currentX = e.pageX - sliderRef.current.offsetLeft;
    const walk = (startX - currentX) * 1.5;
    sliderRef.current.scrollLeft += walk;
    setStartX(currentX);
  };

  const handleScroll = () => {
    if (!sliderRef.current || !sliderRef.current.children.length) return;
    const firstCard = sliderRef.current.children[0] as HTMLElement;
    const cardWidth = firstCard.offsetWidth + 24;
    const originalScrollWidth = cardWidth * hotDeals.length;

    if (sliderRef.current.scrollLeft >= originalScrollWidth * 2) {
      sliderRef.current.scrollLeft -= originalScrollWidth;
    } else if (sliderRef.current.scrollLeft <= 0) {
      sliderRef.current.scrollLeft += originalScrollWidth;
    }

    const currentPos = sliderRef.current.scrollLeft % originalScrollWidth;
    let newActiveDot = Math.round(currentPos / cardWidth);
    if (newActiveDot >= hotDeals.length) newActiveDot = 0;
    setActiveDot(newActiveDot);
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current || !sliderRef.current.children.length) return;
    const firstCard = sliderRef.current.children[0] as HTMLElement;
    const cardWidth = firstCard.offsetWidth + 24;
    const originalScrollWidth = cardWidth * hotDeals.length;
    const currentSetIndex = Math.floor(sliderRef.current.scrollLeft / originalScrollWidth);
    const targetScroll = (currentSetIndex * originalScrollWidth) + (index * cardWidth);
    sliderRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveDot(index);
  };

  return (
    <div className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
        <div className="w-full lg:w-1/3 flex flex-col space-y-5 lg:pr-8">
          <span className="text-[#5d58d8] font-medium text-lg tracking-wide">
            Discover Weekly Travelling
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] leading-[1.15]">
            Hot Deals On Select Expedition Departures
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mb-2">
            Curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more.
          </p>
          <button className="bg-[#5d58d8] hover:bg-[#ff5a36] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 w-max shadow-lg shadow-[#5d58d8]/30 hover:shadow-[#ff5a36]/30 hover:-translate-y-1 mt-4 cursor-pointer">
            Explore More
          </button>
        </div>

        <div className="w-full lg:w-2/3 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing scroll-smooth no-scrollbar py-4"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {infiniteDeals.map((deal, idx) => (
              <div key={`${deal.id}-${idx}`} className="min-w-[300px] sm:min-w-[340px] bg-white rounded-4xl p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl group">
                <div className="h-48 w-full rounded-2xl overflow-hidden relative mb-5">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 bg-[#ff5a36] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    20% OFF
                  </div>
                </div>
                <div className="flex flex-col grow px-2">
                  <div className="flex items-center gap-1.5 text-[#ffb703] mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    <span className="text-gray-400 text-xs ml-1">({deal.reviews} Reviews)</span>
                  </div>
                  <h4 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug line-clamp-2">{deal.title}</h4>
                  <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#5d58d8]" />
                    <span className="truncate">{deal.location}</span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 mt-auto pt-4 pb-1 flex justify-between items-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#5d58d8] font-bold text-xl">${deal.price}</span>
                      <span className="line-through text-gray-400 text-sm">${deal.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-4 lg:mt-8">
            {hotDeals.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDot === index ? 'w-6 bg-[#5d58d8]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
