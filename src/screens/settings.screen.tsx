import React from 'react';
import Box from '../components/General/Box';
import NavigationHeader from '../components/Header/navigation.header';
import PlayLayout from '../components/Layout/play';
import SettingsContent from '../components/Settings';

const SettingsScreen = () => {
  return (
    <PlayLayout>
      <NavigationHeader screenName="Settings" />
      <Box>
        <SettingsContent />
      </Box>
    </PlayLayout>
  );
};

export default SettingsScreen;
