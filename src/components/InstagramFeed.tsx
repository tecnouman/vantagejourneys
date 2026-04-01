import { Camera } from 'lucide-react';

const instagramImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=900&q=80&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <div className="w-full mt-24 bg-white flex flex-col overflow-hidden">
      <div className="flex w-full">
        {instagramImages.map((img, i) => (
          <div key={i} className="relative w-1/4 sm:w-1/6 lg:w-[12.5%] aspect-square shrink-0 group cursor-pointer border-r border-white overflow-hidden">
            <img src={img} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

            <div className="absolute inset-0 bg-[#ff5a36]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                <Camera className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
