

import { HomeTopSection } from "./HomeTopSection";
import { Program } from "./Program";
import { WhyChooseUs } from "./WhyChooseUs";
import { Testimonial } from "./Testimonial";
export const HomePage = () => {
  return (
    <div className="text-2xl">
      <HomeTopSection/>
      <Program/>
      <WhyChooseUs/>
      <Testimonial/>
    </div>
  );
};
