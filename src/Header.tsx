import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';

export default function Header() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar />
      <HeroSection />      
      <DestinationsSection />
    </div>
  );
}
