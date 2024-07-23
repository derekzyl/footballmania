import React from 'react';
import AboutComponent from '../components/Content';
import Box from '../components/General/Box';
import NavigationHeader from '../components/Header/navigation.header';
import PlayLayout from '../components/Layout/play';

const AboutsScreen = () => {
  return (
    <PlayLayout>
      <NavigationHeader screenName="About" />
      <Box>
        <AboutComponent />
      </Box>
    </PlayLayout>
  );
};

export default AboutsScreen;
