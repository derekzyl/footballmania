/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert, BackHandler, Image, Modal, Pressable, StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Share from 'react-native-share';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/General/Button';
import { logoutAction } from '../../redux/actions/auth';
import { getProfileAction, updatePlaySoundAction } from '../../redux/actions/profile';
import { store, useTypedSelector } from '../../redux/store';
import { baseURL } from '../../services/_constants';
import { fireToast } from '../../utils/toast';
import Box from '../General/Box';
import { ButtonVariant } from '../General/Button/variants';
import BlurBackground from '../Layout/blur';

const RatingModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: any;
}) => {
  const dispatch = useDispatch();
  const user = useTypedSelector(state => state.profile.user);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);
  //To set the default Star Selected
  const [Default_Rating, onChangeRating] = useState(5);
  //Filled Star. You can also give the path from local
  const Star =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  //Empty Star. You can also give the path from local
  const Star_With_Border =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  function UpdateRating(key: any) {
    onChangeRating(key);
    //Keeping the Rating Selected in state
  }
  let React_Native_Rating_Bar = [];
  //Array to hold the filled or empty Stars
  for (var i = 1; i <= 5; i++) {
    React_Native_Rating_Bar.push(
      <TouchableOpacity
        activeOpacity={0.9}
        key={i}
        onPress={UpdateRating.bind(null, i)}>
        <Image
          style={styles.StarImage}
          source={i <= Default_Rating ? {uri: Star} : {uri: Star_With_Border}}
        />
      </TouchableOpacity>,
    );
  }

  const [text, onChangeText] = useState('let us know your experience');
  const [showStars, setShowStars] = useState(true);
  const option = {
    name: 'Send feedback',
    path: '',
    variant: ButtonVariant.white,
    onPress: async () => {
      try {
        const token = store.getState().auth?.access_token;
        if (token) {
          //  const res =
          await axios.post(
            baseURL + '/rate/new',
            {
              stars: Default_Rating,
              feedback: text,
              username: user.username,
            },
            {
              headers: {
                'x-access-token': token,
              },
            },
          );
          fireToast({text: 'Thank you for your feedback', type: 'success'});
          //          console.log(res);
        }
      } catch (error) {
        fireToast({text: 'Something went wrong', type: 'danger'});
        //        console.log(error);
        //        setModalVisible(false);
      }
    },
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>x</Text>
          </Pressable>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Tell us what you think about FootballManiac!
            </Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              onFocus={() => setShowStars(!showStars)}
              onBlur={() => setShowStars(!showStars)}
            />
            <Text
              style={[{marginTop: 10}, {display: showStars ? 'flex' : 'none'}]}>
              Give some stars to the app
            </Text>

            <View
              style={[
                styles.childView,
                {display: showStars ? 'flex' : 'none'},
              ]}>
              {React_Native_Rating_Bar}
            </View>
            <CustomButton
              style={styles.feedback}
              onPress={() => option.onPress?.()}
              variant={option.variant}
              text={`${option.name}`}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const SettingsContent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const playSound = useTypedSelector(state => state.profile.sound);
  const [modalVisible, setModalVisible] = useState(false);

  const [active, setActive] = useState({
    sound: playSound,
    music: playSound,
  });

  const onStateChange = (name: string, state: boolean) => {
    setActive({
      ...active,
      [name]: state,
    });
    dispatch(updatePlaySoundAction(!playSound));
  };

  const handleShare = () => {
    try {
      Share.open({
        title: 'Share via',
        message: 'Download Football mania on playstore and appstore',
        url: 'https://www.google.com/search?q=footballmania',
      });
    } catch {
      fireToast({text: "Coundn't share app"});
    }
  };

  const options = [
    {
      name: 'Sound',
      state: {active: 'On', inactive: 'Off'},
      path: '',
      active: active.sound,
      onChange: onStateChange,
      variant: ButtonVariant.green,
    },
    // {
    //   name: 'Music',
    //   state: {active: 'On', inactive: 'Off'},
    //   path: '',
    //   active: active.music,
    //   onChange: onStateChange,
    //   variant: ButtonVariant.green,
    // },
    {
      name: 'Rate App',
      path: '',
      variant: ButtonVariant.white,
      onPress: (url?: string) => {
        console.log(url);
        setModalVisible(true);
      },
    },
    {
      name: 'Share App',
      path: '',
      variant: ButtonVariant.white,
      onPress: () => {
        handleShare();
      },
    },
    {
      name: 'About',
      path: 'About',
      variant: ButtonVariant.white,
      onPress: () => {
        navigation.navigate('About');
      },
    },
    {
      name: 'Terms and Conditions',
      path: '',
      variant: ButtonVariant.white,
      onPress: () => {
        navigation.navigate('Terms');
      },
    },

    {
      name: 'Logout',
      path: '',
      variant: ButtonVariant.white,
      onPress: () => {
        dispatch(logoutAction());
      },
    },
    {
      name: 'Exit App',
      path: '',
      variant: ButtonVariant.white,
      onPress: () => {
        BackHandler.exitApp();
      },
    },
  ];

  return (
    <BlurBackground>
      {options.map((option, index) => {
        if (!option.state) {
          return (
            <Box padding="xs" key={index}>
              <CustomButton
                onPress={() => option.onPress?.()}
                variant={option.variant}
                text={`${option.name}`}
              />
            </Box>
          );
        }
        return (
          <Box padding="xs" key={index}>
            <CustomButton
              variant={option.active ? option.variant : ButtonVariant.navy}
              onPress={() => {
                option.onChange &&
                  option.onChange(option.name.toLowerCase(), !option?.active);
              }}
              text={`${option.name} - ${
                option.active ? option.state.active : option.state?.inactive
              }`}
            />
          </Box>
        );
      })}
      <RatingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </BlurBackground>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  feedback: {
    paddingHorizontal: 40,
    elevation: 1,
  },
  buttonClose: {
    backgroundColor: '#F5A623',
    fontWeight: 'bold',
    fontSize: 16,
    height: 40,
    width: 40,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    // height: '70%',
    // minHeight: 80,
    width: '95%',
    borderWidth: 2,
    padding: 6,
    borderColor: '#fff',
    borderBottomColor: 'black',
    // borderRadius: 20,
  },

  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default SettingsContent;
