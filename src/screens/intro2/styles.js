import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backgroundImage: {
    width: wp(100),
    height: hp(100),
  },
  movements: {
    color: '#fff',
    fontSize: 5,
    paddingHorizontal: wp(15),
    alignSelf: 'center',
    marginTop: hp(20),
  },
  ignoreSounds: {
    color: '#fff',
    fontSize: 5,
    paddingHorizontal: wp(15),
    alignSelf: 'center',
    marginTop: hp(15),
  },
  linearGradient: {
    paddingVertical: 10,
    borderRadius: 30,
    width: wp(60),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 4,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: hp(5),
  },
  lotieContain: {
    width: '50%',
    //backgroundColor: 'red',
    marginTop: hp(20),
  },
});

export default styles;
