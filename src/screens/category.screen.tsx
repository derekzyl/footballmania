import {useNavigation} from '@react-navigation/native';
import CategoryItem from '@src/components/Category/item';
import {CategoryTitle} from '@src/components/Category/style';
import Box from '@src/components/General/Box';
import PlayHeader from '@src/components/Header/play';
import PageLayout from '@src/components/Layout';
import BlurBackground from '@src/components/Layout/blur';
import React from 'react';
import {ScrollView} from 'react-native';

const categories = [
  'Arsenal',
  'Barcelona',
  'Bayern Munich',
  'Chelsea',
  'Dortmund',
  'Manchester United',
  'Manchester City',
  'PSG',
  'Real Madrid',
];

const CategoryScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Play');
  };
  return (
    <PageLayout>
      <ScrollView>
        <Box margin="xs">
          <PlayHeader />
          <Box margin="xs">
            <BlurBackground>
              <Box>
                <CategoryTitle>Select Category</CategoryTitle>
                {categories.map((cat, index) => (
                  <CategoryItem
                    onClick={handleContinue}
                    category={cat}
                    key={index}
                  />
                ))}
              </Box>
            </BlurBackground>
          </Box>
        </Box>
      </ScrollView>
    </PageLayout>
  );
};

export default CategoryScreen;
