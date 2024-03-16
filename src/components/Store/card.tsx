import Check from '@assets/svg/check-blue.svg';
import Coin from '@assets/svg/coin.svg';
import Pass from '@assets/svg/pass.svg';
import Box from '@src/components/General/Box';
import {CustomButton} from '@src/components/General/Button';
import {ButtonVariant} from '@src/components/General/Button/variants';
import BlurBackground from '@src/components/Layout/blur';
import {
  StoreButtonCardTop,
  StoreButtonCardTopText,
  StoreCardButtonText,
  StoreCardContainer,
  StoreCardMiniContent,
  StoreCardRow,
  StoreCardRowItem,
  StoreCardRowItemText,
} from '@src/components/Store';
import {StoreItem} from '@src/redux/reducers/store/types';
import {View} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getBenefitIcon = (type: 'PASS' | 'DOUBLE' | 'COIN') => {
  if (type === 'PASS') {
    return Pass;
  } else if (type === 'DOUBLE') {
    return Check;
  } else {
    return Coin;
  }
};

interface StoreCardProps {
  item: StoreItem;
  onPress: (item: StoreItem) => void;
}

const StoreCard = ({item, onPress}: StoreCardProps) => {
  return (
    <StoreCardContainer>
      <BlurBackground alt noMargin>
        <StoreButtonCardTop topColor={item?.color || '#1D944F'}>
          <StoreButtonCardTopText>{item?.name}</StoreButtonCardTopText>
        </StoreButtonCardTop>
        <Box>
          <StoreCardRow>
            {item.benefits.map((benefit, index) => {
              const Icon = getBenefitIcon(benefit.code);
              return (
                <StoreCardRowItem key={index}>
                  <Icon width={30} height={30} />
                  <StoreCardRowItemText>
                    x{benefit.quantity}
                  </StoreCardRowItemText>
                  <StoreCardRowItemText>{benefit.name}</StoreCardRowItemText>
                </StoreCardRowItem>
              );
            })}
          </StoreCardRow>
          <CustomButton
            onPress={() => onPress(item)}
            variant={ButtonVariant.lemon}>
            <StoreCardButtonText>
              {item.is_ad ? (
                <>
                  <MaterialCommunityIcons size={20} name="movie-outline" />{' '}
                  Watch Ad
                </>
              ) : (
                <>₦{item.amount}</>
              )}
            </StoreCardButtonText>
          </CustomButton>
        </Box>
      </BlurBackground>
    </StoreCardContainer>
  );
};

export default StoreCard;

export const StoreCardMini = ({item, onPress}: StoreCardProps) => {
  const singleBenefit = item.benefits[0];
  const Icon = getBenefitIcon(singleBenefit.code);
  return (
    <StoreCardContainer mini>
      <BlurBackground>
        <Box>
          <View>
            <StoreCardMiniContent>
              <Icon width={30} height={30} />
              <StoreCardRowItemText>
                x{singleBenefit.quantity} {singleBenefit.name}
              </StoreCardRowItemText>
            </StoreCardMiniContent>
            <CustomButton
              onPress={() => onPress(item)}
              size="small"
              variant={ButtonVariant.lemon}>
              <StoreCardButtonText>₦{item.amount}</StoreCardButtonText>
            </CustomButton>
          </View>
        </Box>
      </BlurBackground>
    </StoreCardContainer>
  );
};
