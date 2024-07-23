import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import Coin from '../assets/svg/coin.svg';
import Podium from '../assets/svg/podium.svg';
import Star from '../assets/svg/star.svg';
import Box from '../components/General/Box';
import CustomSelect from '../components/General/Select';
import NavigationHeader from '../components/Header/navigation.header';
import BlurBackground from '../components/Layout/blur';
import PlayLayout from '../components/Layout/play';
import ProfileStatCard from '../components/Profile/stat-card';
import {
  ProfileAvatar,
  ProfileAvatarCamera,
  ProfileAvatarContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInner,
  ProfileNameInput,
  ProfileSelect,
  ProfileSelectLists,
  ProfileStatList,
} from '../components/Profile/style';
import { ProfileStat } from '../components/Profile/type';
import { getGeneralAction } from '../redux/actions/general';
import {
  getProfileAction,
  updateProfileAction,
  updateProfilePictureAction,
} from '../redux/actions/profile';
import { Profile } from '../redux/reducers/profile/types';
import { useTypedSelector } from '../redux/store';
import { cloudinary } from '../utils/image';
import { fireToast } from '../utils/toast';
import banksAndCodes from './banksAndCodes';

const initial: Partial<Profile> = {
  name: '',
  team: '',
  bank: '',
  country: '',
  username: '',
  currency: '',
  account_number: '',
  profile_picture: '',
};

const ProfileScreen = () => {
  const [input, setInput] = useState(initial);
  const dispatch = useDispatch();
  const user = useTypedSelector(state => state.profile.user);
  const general = useTypedSelector(state => state.general);

  const handleChange = (key: string, value: string) => {
    setInput({...input, [key]: value});
  };

  useEffect(() => {
    dispatch(getGeneralAction());
    dispatch(getProfileAction());
  }, [dispatch]);

  useEffect(() => {
    setInput({
      profile_picture: user.profile_picture,
      username: user.username,
      team: user.team,
      country: user.country,
      bank: user.bank,
      currency: user.currency,
      account_number: user.account_number,
      name: user.name,
    });
  }, [user]);

  const handleUsernameSubmit = () => {
    dispatch(updateProfileAction(input, onUpdateSuccess, onUpdateError));
  };

  const handlePickerSubmit = (
    key: string,
    value: string = '',
    other?: string,
  ) => {
    if (other) {
      const payload = {
        bank: Object.keys(banksAndCodes).find(
          bank => banksAndCodes[bank] === other,
        ),
      };

      handleChange('bank', other);
      dispatch(updateProfileAction(payload, onUpdateSuccess, onUpdateError));
    } else {
      const payload = {[key]: value};
      handleChange(key, value);
      dispatch(updateProfileAction(payload, onUpdateSuccess, onUpdateError));
    }
  };

  const onUpdateSuccess = () => {
    fireToast({text: 'Profile update successfully', type: 'success'});
  };

  const onUpdateError = (msg: string) => {
    fireToast({text: msg});
  };

  const openGallery = () => {
    dispatch(updateProfilePictureAction(onUpdateSuccess, onUpdateError));
  };

  return (
    <PlayLayout>
      <NavigationHeader screenName="Profile" />
      <Box>
        <ProfileContainer>
          <ProfileAvatarContainer onPress={openGallery}>
            <ProfileAvatar
              source={{uri: cloudinary(user?.profile_picture, 150)}}
            />
            <ProfileAvatarCamera>
              <MaterialIcons size={25} name="camera-alt" />
            </ProfileAvatarCamera>
          </ProfileAvatarContainer>

          <ProfileContent>
            <BlurBackground noMargin>
              <ProfileInner>
                <Box>
                  <ProfileNameInput
                    maxLength={12}
                    onChangeText={(txt: string) =>
                      handleChange('username', txt)
                    }
                    value={input.username}
                    placeholder="Username"
                    returnKeyType="done"
                    // onBlur={handleUsernameSubmit}
                    onSubmitEditing={handleUsernameSubmit}
                  />
                  <ProfileSelectLists>
                    <ProfileSelect>
                      <CustomSelect
                        placeholderText="Select your team"
                        onClick={(val: string) =>
                          handlePickerSubmit('team', val)
                        }
                        currentCode={input.team}
                        items={general.allTeams}
                      />
                    </ProfileSelect>
                    <ProfileSelect>
                      <CustomSelect
                        placeholderText="Select your country"
                        onClick={(val: string) =>
                          handlePickerSubmit('country', val)
                        }
                        currentCode={input.country}
                        items={general.allCountries}
                      />
                    </ProfileSelect>
                    <ProfileSelect>
                      {console.log(
                        `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
                      )}
                      {console.log(
                        `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        `,
                      )}
                      {console.log(input)}
                      {console.log(
                        `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        `,
                      )}
                      {console.log(
                        `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
                      )}
                      <CustomSelect
                        placeholderText="Select your bank"
                        onClick={(val: string) =>
                          handlePickerSubmit('bank', val)
                        }
                        currentCode={input.bank}
                        items={banksAndCodes}
                      />
                    </ProfileSelect>
                  </ProfileSelectLists>
                  <ProfileNameInput
                    maxLength={8}
                    onChangeText={(txt: string) =>
                      handleChange('currency', txt)
                    }
                    value={input.currency}
                    profileFontSize={20}
                    profileMarginTop={10}
                    placeholder="currency"
                    returnKeyType="done"
                    // onBlur={handleUsernameSubmit}
                    onSubmitEditing={() => {
                      handlePickerSubmit('currency', input.currency);
                    }}
                  />
                  <ProfileNameInput
                    maxLength={26}
                    onChangeText={(txt: string) => handleChange('name', txt)}
                    value={input.name}
                    profileFontSize={20}
                    profileMarginTop={10}
                    placeholder="full name"
                    returnKeyType="done"
                    // onBlur={handleUsernameSubmit}
                    onSubmitEditing={() => {
                      handlePickerSubmit('name', input.name);
                    }}
                  />
                  <ProfileNameInput
                    maxLength={12}
                    onChangeText={(txt: string) =>
                      handleChange('account_number', txt)
                    }
                    value={input.account_number}
                    profileFontSize={20}
                    profileMarginTop={10}
                    keyboardType="number-pad"
                    placeholder="account number"
                    returnKeyType="done"
                    // onBlur={handleUsernameSubmit}
                    onSubmitEditing={() => {
                      handlePickerSubmit(
                        'account_number',
                        input.account_number,
                      );
                    }}
                  />
                  <ProfileLeaderboard />
                </Box>
              </ProfileInner>
            </BlurBackground>
          </ProfileContent>
        </ProfileContainer>
      </Box>
    </PlayLayout>
  );
};

const ProfileLeaderboard = () => {
  const leaderboard = useTypedSelector(state => state.profile.user.leaderboard);
  const statItems: ProfileStat[] = [
    {title: 'World Rank', rank: 123, icon: Podium},
    {title: 'Coins Earned', rank: leaderboard.coins, icon: Coin},
    {title: 'Points Gotten', rank: leaderboard.points, icon: Star},
  ];
  return (
    <ProfileStatList>
      {statItems.map((item, index) => (
        <ProfileStatCard item={item} key={index} />
      ))}
    </ProfileStatList>
  );
};

export default ProfileScreen;
