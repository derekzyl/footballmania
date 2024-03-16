import Box from '@components/General/Box';
import {TermsAndConditionContent} from '@src/components/Content';
import NavigationHeader from '@src/components/Header/navigation.header';
import PlayLayout from '@src/components/Layout/play';
import React from 'react';

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
