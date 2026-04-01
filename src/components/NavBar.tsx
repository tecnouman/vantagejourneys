import { ChevronDown, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', hasDropdown: false },
  { name: 'Ticketing', hasDropdown: false },
  { name: 'Hotels', hasDropdown: false },
  { name: 'Visas', hasDropdown: false },
  { name: 'Tours', hasDropdown: true },
  { name: 'Destinations', hasDropdown: true },
  { name: 'Pages', hasDropdown: true },
];

type NavBarProps = {
  logoSrc?: string;
};

export default function NavBar({ logoSrc }: NavBarProps) {
  return (
    <nav className="bg-white w-full shadow-sm z-40 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-[90px]">
        <div className="flex items-center space-x-2 cursor-pointer">
          {logoSrc ? (
            <img src={logoSrc} alt="Vantage Journeys" className="h-14 w-auto object-contain" />
          ) : (
            <>
              <div className="relative flex items-center justify-center w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#f97316]">
                  <path d="M50,10 C27.9,10 10,27.9 10,50 C10,72.1 27.9,90 50,90 C72.1,90 90,72.1 90,50 C90,27.9 72.1,10 50,10 Z M50,85 C30.7,85 15,69.3 15,50 C15,30.7 30.7,15 50,15 C69.3,15 85,30.7 85,50 C85,69.3 69.3,85 50,85 Z" />
                  <path d="M65,45 L35,45 L45,30 Z" className="fill-[#5b4cc4]" />
                  <path d="M30,50 L70,50 L60,65 Z" className="fill-[#333]" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#333] font-bold text-xl tracking-tight">VANTAGE</span>
                <span className="text-[#5b4cc4] font-bold text-xl tracking-tight">
                  JOURNEYS<span className="text-[10px] text-gray-500 align-top ml-1">®</span>
                </span>
                <span className="text-[8px] text-gray-500 tracking-widest text-right mr-2">(PVT) LTD</span>
              </div>
            </>
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="group relative cursor-pointer flex items-center space-x-1">
              <span className="text-gray-700 font-medium text-sm hover:text-[#5b4cc4] transition-colors">
                {link.name}
              </span>
              {link.hasDropdown && (
                <ChevronDown size={14} className="text-gray-500 group-hover:text-[#5b4cc4] transition-colors" />
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex">
          <button className="bg-[#5b4cc4] hover:bg-[#4a3ca1] transition-colors text-white font-medium px-6 h-[90px] flex items-center space-x-2 w-40 justify-center cursor-pointer">
            <span>Book Now</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-gray-700 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
