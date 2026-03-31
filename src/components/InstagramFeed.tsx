import { Camera } from 'lucide-react';

const instagramImages = [
  '/instagram/insta-1.jpg',
  '/instagram/insta-2.jpg',
  '/instagram/insta-3.jpg',
  '/instagram/insta-4.jpg',
  '/instagram/insta-5.jpg',
  '/instagram/insta-6.jpg',
  '/instagram/insta-7.jpg',
  '/instagram/insta-8.jpg',
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
