import React, {useEffect} from 'react';
import {Container, Images} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const userName = useSelector(state => state.userdataReducer.userName);

  useEffect(() => {
    setTimeout(() => {
      if (userName == '') {
        navigation.navigate('intro1');
      } else {
        navigation.navigate('intro2');
      }
    }, 2000);
  }, []);

  return (
    <Container backgroundColor="#011344" barStyle="light-content">
      <Images.splash width={wp(100)} height={hp(100)} resizeMode={'cover'} />
    </Container>
  );
};

export default Splash;
