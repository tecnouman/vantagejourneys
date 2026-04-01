import planIcon from '../assets/plan-icon.png';

const ribbonItems = [
  "Group Booking Discounts",
  "Real-Time Itinerary Updates",
  "Expert Travel Advisors",
  "Affordable Travel Deals",
  "Mobile-Friendly Platform",
  "Eco-Friendly Travel Options"
];

const baseRibbonSet = [...ribbonItems, ...ribbonItems];
const reversedSet = [...baseRibbonSet].reverse();

function RibbonRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const bgColor = direction === 'left' ? 'bg-[#f28f1d]' : 'bg-[#5d58d8]';
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`w-full ${bgColor} py-3.5 flex overflow-hidden`}>
      <div className={`flex w-max ${animClass}`}>
        {[0, 1].map((setIdx) => (
          <div key={setIdx} className="flex shrink-0 items-center">
            {items.map((text, idx) => (
              <div key={setIdx === 0 ? idx : `${idx}-dup`} className="flex items-center mx-6 text-white">
                <div className="relative flex items-center justify-center mr-3">
                  <div className="absolute w-5 h-5 bg-[#ffb703] opacity-60 rounded-full left-0 bottom-0"></div>
                  <img src={planIcon} alt="" aria-hidden="true" className="w-5 h-5 object-contain relative z-10" />
                </div>
                <span className="text-xl font-bold whitespace-nowrap tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RibbonMarquee() {
  return (
    <div className="w-full flex flex-col mt-0">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: scroll-left 70s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: scroll-right 70s linear infinite;
          will-change: transform;
        }
      `}</style>

      <RibbonRow items={baseRibbonSet} direction="left" />
      <RibbonRow items={reversedSet} direction="right" />
    </div>
  );
}
