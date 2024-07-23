import React from 'react';
import { TermsAndConditionContent } from '../components/Content';
import Box from '../components/General/Box';
import NavigationHeader from '../components/Header/navigation.header';
import PlayLayout from '../components/Layout/play';

const TermsScreen = () => {
  return (
    <PlayLayout>
      <NavigationHeader screenName="Terms and Condition" />
      <Box>
        <TermsAndConditionContent />
      </Box>
    </PlayLayout>
  );
};

export default TermsScreen;
