import React, {useState} from 'react';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {View, Pressable, Image} from 'react-native';
import {Container, Icon, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const index = ({navigation}) => {
  const [toggle, setToggle] = useState(false);

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <Container>
      <LinearGradient
        colors={['#011244', '#190937', '#250332']}
        style={styles.linearGradient}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon.leftArrow size={25} />
          </TouchableOpacity>
          <ResponsiveText style={styles.sounds}>Help</ResponsiveText>
        </View>
        {/* <View style={{padding: 20}}>
          <View style={styles.remainderView}>
            <ResponsiveText style={styles.remainder}>Remainder</ResponsiveText>
            <Pressable
              style={{alignSelf: 'center'}}
              onPress={() => {
                {
                  setToggle(!toggle);
                }
              }}>
              {toggle ? (
                <Image source={require('../../assets/Icons/Switchon.png')} />
              ) : (
                <Image source={require('../../assets/Icons/Switchoff.png')} />
              )}
            </Pressable>
          </View>

          <Rating
            type="heart"
            ratingCount={5}
            ratingColor="#111743"
            tintColor="#190937"
            imageSize={40}
            showRating
            starContainerStyle={{backgroundColor: 'red'}}
            ratingContainerStyle={{backgroundColor: 'yellow'}}
            style={{paddingVertical: 10}}
            onFinishRating={ratingCompleted()}
          />
        </View> */}
        <ResponsiveText style={{color: '#fff', marginLeft: 10}}>
          About our app
        </ResponsiveText>
      </LinearGradient>
    </Container>
  );
};

export default index;
