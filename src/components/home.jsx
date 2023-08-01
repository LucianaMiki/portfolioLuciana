import * as React from 'react';
import '../assets/styles/home.css';
import HomeButton from './homeButton';
import SocialButtonn from './socialButtons';
import HomeText from './homeText';

function Home() {
  return (
    <div>
        <HomeButton/>
        <SocialButtonn/>
        <HomeText/>
    </div>
  );
}

export default Home;
