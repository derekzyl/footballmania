import Barcelona from '@src/assets/svg/barcelona.svg';
import React from 'react';
import {
  CategortItemContainer,
  CategoryItemLeading,
  CategoryItemTitle,
} from './style';

interface CategoryItemProp {
  category: string;
  onClick?: () => void;
}

const CategoryItem = ({category, onClick}: CategoryItemProp) => {
  return (
    <CategortItemContainer onPress={onClick}>
      <CategoryItemLeading>
        <Barcelona />
        <CategoryItemTitle>{category}</CategoryItemTitle>
      </CategoryItemLeading>
    </CategortItemContainer>
  );
};

export default CategoryItem;
