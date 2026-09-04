import Hero from '@/components/home/Hero';
import LatestTuitions from '@/components/home/LatestTuitions';
import LatestTutors from '@/components/home/LatestTutors';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero/>
      <LatestTuitions />
      <LatestTutors/>
    </div>
  );
};

export default page;