import { Users, Briefcase, Camera } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Shumaila Arif",
    role: "Tourist Guide",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    socials: { fb: "#", yt: "#", ig: "#" }
  },
  {
    id: 2,
    name: "Arsalan & Manahil",
    role: "Tourist Guide",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    socials: { fb: "#", yt: "#", ig: "#" }
  }
];

export default function TeamSection() {
  return (
    <div className="w-full bg-linear-to-b from-white to-[#f3f4f8] pt-20 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <h3 className="text-[#5d58d8] font-medium text-lg tracking-wide mb-2">Our Team</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">Tours Guiding Team</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {teamMembers.map((member, idx) => (
            <div key={member.id} className="flex flex-col items-center w-[300px] relative mt-12 group">
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] z-10 relative bg-white transition-transform duration-500 group-hover:-translate-y-2">
                <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
              </div>

              <div className="w-full bg-white border border-dashed border-gray-300 rounded-[2.5rem] pt-[120px] pb-8 px-6 -mt-[100px] flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#5d58d8]/40">
                <span className="text-[#ff5a36] text-[13px] font-medium mb-1 tracking-wide">{member.role}</span>
                <h4 className="text-xl font-bold text-gray-900 mb-5">{member.name}</h4>

                <div className="flex items-center gap-3">
                  <a href={member.socials.fb} className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${idx === 0 ? 'bg-[#5d58d8] text-white shadow-md' : 'border border-gray-200 text-gray-500 hover:bg-[#5d58d8] hover:text-white hover:border-[#5d58d8]'}`}>
                    <Users size={16} strokeWidth={idx === 0 ? 0 : 2} fill={idx === 0 ? "currentColor" : "none"} className={idx === 0 ? "" : "hover:fill-current"} />
                  </a>
                  <a href={member.socials.yt} className="w-9 h-9 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all duration-300">
                    <Briefcase size={16} strokeWidth={2} />
                  </a>
                  <a href={member.socials.ig} className="w-9 h-9 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] transition-all duration-300">
                    <Camera size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
