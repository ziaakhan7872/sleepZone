import React from 'react';
import styles from './styles';
import {View, Pressable} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const index = ({navigation}) => {
  const handleuserName = () => {
    navigation.navigate('Dashboard', {screen: 'sleep'});
  };
  return (
    <Container>
      <View style={styles.mainContainer}>
        <ResponsiveText style={styles.respectPrivacy}>
          We respect your privacy
        </ResponsiveText>
        <ResponsiveText style={styles.privacy}>
          Your privacy is important to us. That's why we want to make sure your
          use of sleep cycle,happens in a safe place.
        </ResponsiveText>
        <ResponsiveText style={styles.privacy}>
          Privacy policy and terms of use
        </ResponsiveText>

        <Pressable onPress={() => handleuserName()} style={styles.button}>
          <LinearGradient
            colors={['#020F32', '#190937', '#250332']}
            style={styles.linearGradient}>
            <ResponsiveText style={styles.buttonText}>Got it</ResponsiveText>
          </LinearGradient>
        </Pressable>
      </View>
    </Container>
  );
};

export default index;
