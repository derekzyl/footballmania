import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Box } from 'native-base';
import { CustomButton } from '../components/General/Button';
import { ButtonVariant } from '../components/General/Button/variants';
import PageLayout from '../components/Layout';
import { SplashButtonList, SplashFlex, SplashSection, SplashText } from '../components/Splash/style';
import {
  /*   facebookLoginAction, */
  googleLoginAction,
} from '../redux/actions/auth';
import { useAppDispatch } from '../redux/store';

export const SplashScreen = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleClick = async () => {
    setLoading(true);
    dispatch(googleLoginAction(onRegisterSuccess, onError));
  };

  const onRegisterSuccess = () => {
    setLoading(false);
    navigation.navigate('ProfileSetup');
  };

  const onError = () => {
    setLoading(false);
  };

  // const handleFacebook = () => {
  //   setLoading(true);
  //   dispatch(facebookLoginAction(onRegisterSuccess, onError));
  // };


  return (
    <PageLayout>
      {/* <Text>hello world</Text> */}
      {/* <LoaderOverlay visible={loading} /> */}
      <SplashFlex>
        <Box>
        
          {/* <SplashLogo /> */}
        </Box>

        <SplashSection>
          <SplashButtonList>
            <SplashText>Login with</SplashText>
            {/* <Box>
              <CustomButton
                onPress={handleFacebook}
                iconName="facebook"
                text="Facebook"
                variant={ButtonVariant.blue}
              />
            </Box> */}

            <Box>
              <CustomButton
                onPress={handleClick}
                iconName="google"
                text="Google"
                variant={ButtonVariant.red}
              />
            </Box>
          </SplashButtonList>
        </SplashSection>
      </SplashFlex>
    </PageLayout>
  );
};


