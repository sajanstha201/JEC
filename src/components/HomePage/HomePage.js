

import { HomeTopSection } from "./HomeTopSection";
import { Program } from "./Program";
import { WhyChooseUs } from "./WhyChooseUs";
import { Testimonial } from "./Testimonial";
export const HomePage = () => {
  return (
    <div>
      <HomeTopSection/>
      <Program/>
      <WhyChooseUs/>
      <Testimonial/>
    </div>
  );
};
