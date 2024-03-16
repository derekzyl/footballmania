import SplashLogo from '@assets/svg/splash-logo2.svg';
import { useNavigation } from '@react-navigation/native';
import Box from '@src/components/General/Box';
import { CustomButton } from '@src/components/General/Button';
import { ButtonVariant } from '@src/components/General/Button/variants';
import LoaderOverlay from '@src/components/General/Loading';
import PageLayout from '@src/components/Layout';
import {
  SplashButtonList,
  SplashFlex,
  SplashSection,
  SplashText,
} from '@src/components/Splash/style';
import {
  /*   facebookLoginAction, */
  googleLoginAction,
} from '@src/redux/actions/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SplashScreen = () => {
  const dispatch = useDispatch();
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
      <LoaderOverlay visible={loading} />
      <SplashFlex>
        <Box>
          <SplashLogo />
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

export default SplashScreen;
