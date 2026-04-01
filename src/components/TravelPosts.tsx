import { ArrowRight, User, MessageCircle } from 'lucide-react';

const travelPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    day: "16",
    month: "Nov",
    author: "Mursalin",
    comments: "05 Comments",
    title: "Working Out During Your Upcoming...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504280655850-1dfac138e0d6?q=80&w=800&auto=format&fit=crop",
    day: "20",
    month: "Dec",
    author: "Mursalin",
    comments: "12 Comments",
    title: "The Ultimate Guide To Packing For...",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop",
    day: "24",
    month: "Jan",
    author: "Mursalin",
    comments: "08 Comments",
    title: "10 Hidden Gems You Need To Visit...",
  }
];

export default function TravelPosts() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-[#ff5a36] font-semibold text-lg tracking-wide mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ff5a36]"></span>
            Top Travel Post
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] leading-[1.2]">
            Explore The World Read
          </h2>
        </div>

        <button className="bg-[#5d58d8] hover:bg-[#ff5a36] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap mb-2 cursor-pointer">
          View All Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-4xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-5 left-6 flex flex-col rounded-xl overflow-hidden shadow-lg z-10 w-[72px]">
                <div className="bg-[#ff5a36] text-white font-bold text-2xl py-2 text-center">
                  {post.day}
                </div>
                <div className="bg-white text-gray-900 font-semibold text-sm py-1.5 text-center">
                  {post.month}
                </div>
              </div>
            </div>

            <div className="p-8 pt-10 flex flex-col grow">
              <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm font-medium mb-4">
                <div className="flex items-center gap-2 hover:text-[#5d58d8] transition-colors duration-300">
                  <User size={16} className="text-[#ff5a36]" strokeWidth={2.5} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-[#5d58d8] transition-colors duration-300">
                  <MessageCircle size={16} className="text-[#ff5a36]" strokeWidth={2.5} />
                  <span>{post.comments}</span>
                </div>
              </div>

              <h3 className="text-[22px] font-bold text-gray-900 leading-snug mb-5 group-hover:text-[#5d58d8] transition-colors duration-300">
                {post.title}
              </h3>

              <div className="border-t border-dashed border-gray-200 my-2 mt-auto"></div>

              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-[#111827] font-bold group-hover:text-[#ff5a36] transition-colors duration-300 text-[15px]">
                  Read More
                  <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
