import Hero from '@/components/home/Hero';
import LatestTuitions from '@/components/home/LatestTuitions';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero/>
      <LatestTuitions />
    </div>
  );
};

export default page;