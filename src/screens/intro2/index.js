import React, {useState} from 'react';
import styles from './styles';
import {
  View,
  ImageBackground,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const index = ({navigation}) => {
  const handleuserName = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone permissions',
          message: 'Audio record needs access to your Microphone',

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the microphone');
        navigation.navigate('privacy');
      } else {
        handleuserName();
        console.log('microphone permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleMusic = () => {
    navigation.navigate('music');
  };
  return (
    <Container>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/Images/intro2.png')}
        style={styles.backgroundImage}>
        <ResponsiveText style={styles.movements}>
          The built in microphone is used to analyze your movements.
        </ResponsiveText>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.lotieContain}>
            <LottieView
              resizeMode="contain"
              style={{height: 33}}
              source={require('../../assets/LottieFiles/drawLine.json')}
              autoPlay={true}
              loop={true}
            />
          </View>
        </View>
        <ResponsiveText style={styles.ignoreSounds}>
          It ignores all other sounds, for example snoring, fans or your partner
          moving.
        </ResponsiveText>

        <TouchableOpacity
          onPress={() => handleuserName()}
          //onPress={() => handleMusic()}
          style={styles.button}>
          <LinearGradient
            colors={['#020F32', '#190937', '#250332']}
            style={styles.linearGradient}>
            <ResponsiveText style={styles.buttonText}>
              Enable Microphone
            </ResponsiveText>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </Container>
  );
};

export default index;
