import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import CategoryItem from '../components/Category/item';
import { CategoryTitle } from '../components/Category/style';
import Box from '../components/General/Box';
import PlayHeader from '../components/Header/play';
import PageLayout from '../components/Layout';
import BlurBackground from '../components/Layout/blur';

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
