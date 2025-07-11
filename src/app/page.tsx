import CollegeCardsSection from "@/components/home/CollegeCardsSection";
import CollegeGallery from "@/components/home/CollegeGallery";
import HeroBanner from "@/components/home/HeroBanner";
import ReviewSection from "@/components/home/ReviewSection";


export default function Home() {
  return (
    <div className="pb-10"> 
    <div className="container mx-auto">
          <HeroBanner></HeroBanner>
          <CollegeCardsSection/>
          <CollegeGallery/>
          <ReviewSection/>
    </div>
    </div>
  );
}
