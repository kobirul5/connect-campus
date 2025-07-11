import CollegeCardsSection from "@/components/home/CollegeCardsSection";
import HeroBanner from "@/components/home/HeroBanner";


export default function Home() {
  return (
    <div className="pb-10"> 
    <div className="container mx-auto">
          <HeroBanner></HeroBanner>
          <CollegeCardsSection/>
    </div>
    </div>
  );
}
