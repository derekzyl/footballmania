import Box from '@components/General/Box';
import AboutComponent from '@src/components/Content';
import NavigationHeader from '@src/components/Header/navigation.header';
import PlayLayout from '@src/components/Layout/play';
import React from 'react';

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
