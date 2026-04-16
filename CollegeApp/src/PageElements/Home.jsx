import React from 'react';

import Imageslider1 from './Imageslider1';
import ReviewsSection from './ReviewsSection';
import Notices from './Notices';
import Searchbar from './Searchbar';
import FAQSection from './FAQsection';



const Home = () => {
  return (
    <div>
    
     <Imageslider1/>
     <Notices/>

     <ReviewsSection/>
     <FAQSection/>
    </div>
  );
};

export default Home;
