import ModalClose from '@assets/svg/modal-close.svg';
import responsive from '@src/lib/responsive';
import {cloudinary} from '@src/utils/image';
import {View} from 'native-base';
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import CustomModal from '../CustomModal';
import {StyledText} from '../Text';

interface CustomSelectProps {
  items: any[];
  currentCode?: string;
  onClick: (val: string) => void;
  placeholderText: string;
}

const SelectModalItem = ({item, onClick}: any) => {
  return (
    <SelectItem onPress={() => onClick(item.code, item)}>
      {item.logo && (
        <SelectItemImage
          resizeMode="contain"
          source={{uri: cloudinary(item.logo, 80)}}
        />
      )}
      {item.name && <SelectItemText>{item.name}</SelectItemText>}
    </SelectItem>
  );
};

const CustomSelect = ({
  items,
  currentCode,
  onClick,
  placeholderText,
}: CustomSelectProps) => {
  const [optionsModal, setOptionsModal] = useState(false);

  const handleOpen = () => {
    setOptionsModal(true);
  };

  const handleClose = () => {
    setOptionsModal(false);
  };

  const handleClick = (val: string) => {
    setOptionsModal(false);
    onClick?.(val);
  };

  const currentItem = items.find((item) => item.code === currentCode);
  return (
    <>
      <CustomModal
        propagateSwipe={true}
        useSwipe={false}
        visible={optionsModal}
        close={handleClose}>
        <SelectModalContent>
          <SelectModalTop>
            <SelectHeading>{placeholderText}</SelectHeading>
            <TouchableOpacity onPress={handleClose}>
              <ModalClose />
            </TouchableOpacity>
          </SelectModalTop>

          <FlatList
            data={items}
            keyExtractor={(item) => item.code || item}
            renderItem={({item}) => (
              <SelectModalItem
                onClick={handleClick}
                item={item}
                key={item.code}
              />
            )}
          />
        </SelectModalContent>
      </CustomModal>
      <SelectContainer onPress={handleOpen} activeOpacity={0.8}>
        <SelectLeft>
          <SelectItemImage
            resizeMode="contain"
            source={{uri: cloudinary(currentItem?.logo, 100)}}
          />
          {currentItem?.name ? (
            <SelectText>{currentItem?.name}</SelectText>
          ) : (
            <SelectText alt>{placeholderText}</SelectText>
          )}
        </SelectLeft>
        <MaterialIcons name="arrow-drop-down" size={30} />
      </SelectContainer>
    </>
  );
};

const SelectContainer = styled(TouchableOpacity)`
  background-color: #fff;
  padding-top: 20px;
  border-radius: 10px;
  padding: 12px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectModalContent = styled(View)`
  padding: 0 20px;
  max-height: ${responsive.height(60)}px;
`;

const SelectModalTop = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const SelectLeft = styled(View)`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const SelectText = styled(StyledText)<{alt?: boolean}>`
  font-size: 20px;
  margin-left: 10px;
  color: ${({alt}) => (!alt ? '#000' : '#bec4cc')};
`;

const SelectItem = styled(TouchableOpacity)`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const SelectItemImage = styled(Image)`
  width: ${responsive.width(8)}px;
  height: ${responsive.width(8)}px;
  margin: ${responsive.height(0.2)}px 0;
`;

const SelectItemText = styled(StyledText)`
  font-size: 18px;
  margin-left: 10px;
`;

const SelectHeading = styled(StyledText)`
  color: #000000;
  font-size: 20px;
`;

export default CustomSelect;
