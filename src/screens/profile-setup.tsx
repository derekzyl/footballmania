import Box from '@src/components/General/Box';
import {CustomButton} from '@src/components/General/Button';
import {ButtonVariant} from '@src/components/General/Button/variants';
import CustomSelect from '@src/components/General/Select';
import {StyledText} from '@src/components/General/Text';
import PageLayout from '@src/components/Layout';
import {ProfileNameInput} from '@src/components/Profile/style';
import responsive from '@src/lib/responsive';
import {
  getAllCountriesAction,
  getAllTeamsAction,
} from '@src/redux/actions/general';
import {updateProfileAction} from '@src/redux/actions/profile';
import {useTypedSelector} from '@src/redux/store';
import {View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

const initialState = {
  username: '',
  team: '',
  country: '',
};

const ProfileSetupScreen = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialState);

  const general = useTypedSelector(state => state.general);

  useEffect(() => {
    dispatch(getAllTeamsAction());
    dispatch(getAllCountriesAction());
  }, [dispatch]);

  const handleClick = () => {
    if (input.username) {
      dispatch(updateProfileAction(input, onUpdateSuccess, onUpdateError));
    }
  };

  const onUpdateSuccess = () => {
    //
  };

  const onUpdateError = () => {
    //
  };

  const handleChange = (key: string, value: any) => {
    setInput({...input, [key]: value});
  };

  return (
    <PageLayout>
      <ProfileSetupFlex>
        <Box>
          <Box margin="xs">
            <ProfileSetupTitle>Setup your profile</ProfileSetupTitle>
          </Box>
          <View>
            <Box margin="xs">
              <ProfileNameInput
                onChangeText={(txt: string) => handleChange('username', txt)}
                value={input.username}
                placeholder="Username"
                maxLength={9}
              />
            </Box>
            <Box margin="xs">
              <CustomSelect
                placeholderText="Select your team"
                onClick={(val: string) => handleChange('team', val)}
                currentCode={input.team}
                items={general.allTeams}
              />
            </Box>
            <Box margin="xs">
              <CustomSelect
                placeholderText="Select your team"
                onClick={(val: string) => handleChange('country', val)}
                currentCode={input.country}
                items={general.allCountries}
              />
            </Box>
          </View>
        </Box>
        <Box>
          <Box margin="xs">
            <CustomButton
              variant={ButtonVariant.lemon}
              text="Continue"
              onPress={handleClick}
            />
          </Box>
        </Box>
      </ProfileSetupFlex>
    </PageLayout>
  );
};

const ProfileSetupFlex = styled(View)`
  justify-content: space-between;
  flex: 1;
`;

const ProfileSetupTitle = styled(StyledText)`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-top: ${responsive.height(5)}px;
  margin-bottom: ${responsive.height(2)}px;
`;

export default ProfileSetupScreen;
