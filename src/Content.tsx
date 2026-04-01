import AboutSection from './components/AboutSection';
import FlightPartners from './components/FlightPartners';
import FeaturedPlaces from './components/FeaturedPlaces';
import HotDeals from './components/HotDeals';
import Testimonials from './components/Testimonials';
import RibbonMarquee from './components/RibbonMarquee';
import TeamSection from './components/TeamSection';
import TravelPosts from './components/TravelPosts';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import DestinationsSection from './components/DestinationsSection';
import FindTrip from './components/FindTrip';

export default function Content() {
  return (
    <div className="min-h-screen bg-[#f3f4f8] py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 flex flex-col items-center overflow-x-hidden">
      <FindTrip />
      <DestinationsSection />
      <AboutSection />
      <FlightPartners />
      <FeaturedPlaces />
      {/* <WhyChooseUs /> */}
      <HotDeals />
      <Testimonials />
      <RibbonMarquee />
      <TeamSection />
      <TravelPosts />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
