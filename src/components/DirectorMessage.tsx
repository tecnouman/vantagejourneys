import { useState } from 'react';

type Director = {
  title: string;
  message: string;
  name: string;
  role: string;
  imageUrl: string;
};

type DirectorMessageProps = {
  directors: Director[];
};

export default function DirectorMessage({ directors }: DirectorMessageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (directors.length === 0) {
    return null;
  }

  const showIndicators = directors.length > 1;

  return (
    <div className="max-w-4xl mx-auto px-6 text-center mb-20">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {directors.map((director) => (
            <div key={director.name} className="w-full shrink-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8">{director.title}</h2>
              <p className="text-gray-500 italic text-sm md:text-base leading-relaxed mb-10">"{director.message}"</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] overflow-hidden">
                  <img src={director.imageUrl} alt={director.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#111827] text-lg">{director.name}</h4>
                  <p className="text-sm text-[#ff5a36] font-medium mt-1">{director.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showIndicators && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {directors.map((director, index) => (
            <button
              key={director.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                index === activeIndex ? 'bg-[#ff5a36]' : 'bg-gray-300'
              }`}
              aria-label={`Go to ${director.name}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
