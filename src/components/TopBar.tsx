import { Mail, MapPin, Users, Camera, MessageCircle, Briefcase, Music } from 'lucide-react';

const socialLinks = [
  { icon: Users, href: '#' },
  { icon: Camera, href: '#' },
  { icon: MessageCircle, href: '#' },
  { icon: Briefcase, href: '#' },
  { icon: Music, href: '#' },
];

export default function TopBar() {
  return (
    <div className="bg-[#242424] text-[#a0a0a0] py-2 px-4 md:px-8 text-xs font-medium flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
          <Mail size={14} />
          <span>Info@Vantagejourneys.Com</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
          <MapPin size={14} />
          <span>SUITE NO. 202, 2ND FLOOR, GOHAR CHAMBER, KARACHI</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} className="hover:text-white transition-colors">
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
