import CollegeCardsSection from "@/components/home/CollegeCardsSection";
import CollegeGallery from "@/components/home/CollegeGallery";
import HeroBanner from "@/components/home/HeroBanner";


export default function Home() {
  return (
    <div className="pb-10"> 
    <div className="container mx-auto">
          <HeroBanner></HeroBanner>
          <CollegeCardsSection/>
          <CollegeGallery/>
    </div>
    </div>
  );
}
