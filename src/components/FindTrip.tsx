import { useEffect, useRef, useState } from 'react';
import { MapPin, User, Bike, Clock, ChevronDown } from 'lucide-react';

const fields = [
  {
    icon: <MapPin size={18} className="text-[#5b4cc4]" />,
    value: 'Bali, Indonesia',
    options: ['Bali, Indonesia', 'Kyoto, Japan', 'Santorini, Greece', 'Cape Town, South Africa'],
  },
  {
    icon: <User size={18} className="text-[#5b4cc4]" />,
    value: 'Family Adventure',
    options: ['Family Adventure', 'Solo Explorer', 'Couple Getaway', 'Friends Group'],
  },
  {
    icon: <Bike size={18} className="text-[#5b4cc4]" />,
    value: 'Cycling + Hiking',
    options: ['Cycling + Hiking', 'Cultural Tours', 'Beach Relaxation', 'Wildlife Safari'],
  },
  {
    icon: <Clock size={18} className="text-[#5b4cc4]" />,
    value: '7 Days',
    options: ['4 Days', '7 Days', '10 Days', '14 Days'],
  },
];

type FindTripProps = {
  className?: string;
};

export default function FindTrip({ className = '' }: FindTripProps) {
  const [selectedValues, setSelectedValues] = useState(fields.map((field) => field.value));
  const [openFieldIndex, setOpenFieldIndex] = useState<number | null>(null);
  const selectGroupRef = useRef<HTMLDivElement>(null);

  const handleFieldChange = (fieldIndex: number, nextValue: string) => {
    setSelectedValues((prevValues) =>
      prevValues.map((value, index) => (index === fieldIndex ? nextValue : value)),
    );
  };

  const handleToggleField = (fieldIndex: number) => {
    setOpenFieldIndex((prevOpenIndex) => (prevOpenIndex === fieldIndex ? null : fieldIndex));
  };

  const handleOptionSelect = (fieldIndex: number, optionValue: string) => {
    handleFieldChange(fieldIndex, optionValue);
    setOpenFieldIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectGroupRef.current) return;

      if (!selectGroupRef.current.contains(event.target as Node)) {
        setOpenFieldIndex(null);
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenFieldIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  return (
    <div className={`m-50 md:my-6 bg-white rounded-[28px] shadow-[0_18px_40px_-24px_rgba(17,24,39,0.32)] border border-gray-100 md:p-4 ${className}`}>
      <div className="flex flex-col xl:flex-row gap-3 xl:items-center">
        <div ref={selectGroupRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 flex-1 gap-2">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`relative h-14 flex items-center px-4 rounded-2xl border border-gray-200 bg-white shadow-[0_6px_16px_-14px_rgba(17,24,39,0.6)] hover:border-[#c8c1f2] hover:shadow-[0_10px_22px_-16px_rgba(91,76,196,0.55)] transition-all group focus-within:border-[#5b4cc4] focus-within:ring-2 focus-within:ring-[#5b4cc4]/20 ${openFieldIndex === index ? 'z-30 border-[#5b4cc4] ring-2 ring-[#5b4cc4]/20' : ''}`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {field.icon}
                <button
                  type="button"
                  onClick={() => handleToggleField(index)}
                  className="w-full flex items-center justify-between gap-2 bg-transparent text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors outline-none cursor-pointer"
                  aria-haspopup="listbox"
                  aria-expanded={openFieldIndex === index}
                >
                  <span className="truncate text-left">{selectedValues[index]}</span>
                  <span className="h-7 w-7 shrink-0 rounded-full bg-[#f2f0ff] text-[#5b4cc4] flex items-center justify-center">
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openFieldIndex === index ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                    />
                  </span>
                </button>
              </div>
              {openFieldIndex === index && (
                <div className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-[#dbd6fb] bg-white p-1.5 shadow-[0_20px_35px_-22px_rgba(17,24,39,0.65)]">
                  {field.options.map((option) => {
                    const isSelected = option === selectedValues[index];
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleOptionSelect(index, option)}
                        className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition-colors cursor-pointer ${isSelected ? 'bg-[#f2f0ff] text-[#4d3fb3] font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="bg-[#5b4cc4] hover:bg-[#ff5a36] transition-colors duration-300 text-white font-medium px-8 h-12 rounded-2xl shrink-0 whitespace-nowrap w-full xl:w-auto cursor-pointer">
          Find Your Trip
        </button>
      </div>
    </div>
  );
}
