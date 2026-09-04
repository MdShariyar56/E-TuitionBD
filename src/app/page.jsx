import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import LatestTuitions from "@/components/home/LatestTuitions";
import LatestTutors from "@/components/home/LatestTutors";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <LatestTuitions />
      <LatestTutors />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default page;
