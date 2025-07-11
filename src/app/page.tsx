import CollegeCardsSection from "@/components/home/CollegeCardsSection";
import CollegeGallery from "@/components/home/CollegeGallery";
import HeroBanner from "@/components/home/HeroBanner";
import ResearchPapersSection from "@/components/home/ResearchPapersSection";
import ReviewSection from "@/components/home/ReviewSection";


export default function Home() {
  return (
    <div className="pb-10"> 
    <div className="container mx-auto">
          <HeroBanner></HeroBanner>
          <CollegeCardsSection/>
          <CollegeGallery/>
          <ReviewSection/>
          <ResearchPapersSection/>
    </div>
    </div>
  );
}
