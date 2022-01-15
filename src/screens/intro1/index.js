import React, {useState} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  ImageBackground,
  ScrollView,
  Keyboard,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ResponsiveText, Input} from '../../components';
import {adduserName} from '../../redux/actions/userdataAction';

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const [userName, setuserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleuserName = () => {
    if (userName.trim().length == 0) {
      setErrorMessage('Please Enter Name !');
    } else {
      setErrorMessage('');

      let usernameObj = {
        userName: userName,
      };
      dispatch(adduserName(usernameObj));

      navigation.navigate('intro2');
    }
  };
  return (
    <Container backgroundColor="#011244" barStyle="light-content">
      <ScrollView>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/Images/intro1.png')}
          style={styles.backgroundImage}>
          <View style={styles.healthyContainer}>
            <ResponsiveText
              style={{
                color: errorMessage.length ? 'red' : 'transparent',
                textAlign: 'center',
                fontSize: 5,
                marginBottom: 20,
              }}>
              {errorMessage.length ? errorMessage : null}
            </ResponsiveText>
            <ResponsiveText style={styles.healthy}>
              An Alaram that keeps you healthy
            </ResponsiveText>
            <ResponsiveText style={styles.properSleep}>
              Precisely set time for you to wake up that helps you in taking
              proper sleep
            </ResponsiveText>
            <ResponsiveText style={styles.name}>
              Would you mind telling us your name?
            </ResponsiveText>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Input
              style={styles.input}
              onChangeText={userName => setuserName(userName)}
              defaultValue={userName}
              returnKeyType="go"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <Pressable onPress={() => handleuserName()}>
            <LinearGradient
              colors={['#020F32', '#190937', '#250332']}
              style={styles.linearGradient}>
              <ResponsiveText style={styles.buttonText}>
                Get Started
              </ResponsiveText>
            </LinearGradient>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
};

export default index;
