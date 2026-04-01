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
    <div>
      <FindTrip />
      <DestinationsSection />
      <AboutSection />
      <FlightPartners />
      <FeaturedPlaces />      
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
