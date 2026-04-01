import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import headerLogo from './assets/header-logo.png';

export default function Header() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <HeroSection />      
    </div>
  );
}
