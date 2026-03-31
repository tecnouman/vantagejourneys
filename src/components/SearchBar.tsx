import { useState } from 'react';
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

type SearchBarProps = {
  className?: string;
};

export default function SearchBar({ className = '' }: SearchBarProps) {
  const [selectedValues, setSelectedValues] = useState(fields.map((field) => field.value));

  const handleFieldChange = (fieldIndex: number, nextValue: string) => {
    setSelectedValues((prevValues) =>
      prevValues.map((value, index) => (index === fieldIndex ? nextValue : value)),
    );
  };

  return (
    <div className={`w-full my-4 md:my-6 bg-white rounded-[28px] shadow-[0_18px_40px_-24px_rgba(17,24,39,0.32)] border border-gray-100 p-3 md:p-4 ${className}`}>
      <div className="flex flex-col xl:flex-row gap-3 xl:items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 flex-1 gap-2">
          {fields.map((field, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-between px-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100/70 transition-colors group"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {field.icon}
                <select
                  value={selectedValues[index]}
                  onChange={(event) => handleFieldChange(index, event.target.value)}
                  className="w-full bg-transparent text-sm text-gray-600 group-hover:text-gray-900 transition-colors outline-none appearance-none cursor-pointer pr-2"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown size={14} className="text-gray-400 pointer-events-none" />
            </div>
          ))}
        </div>
        <button className="bg-[#5b4cc4] hover:bg-[#4a3ca1] transition-colors text-white font-medium px-8 h-12 rounded-2xl shrink-0 whitespace-nowrap w-full xl:w-auto">
          Find Your Trip
        </button>
      </div>
    </div>
  );
}
