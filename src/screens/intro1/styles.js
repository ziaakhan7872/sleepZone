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
  healthyContainer: {
    marginTop: hp(15),
  },
  healthy: {
    color: '#fff',
    fontSize: 5,
    marginHorizontal: wp(10),
    marginBottom: hp(5),
    alignSelf: 'center',
  },
  properSleep: {
    color: '#fff',
    fontSize: 5,
    marginHorizontal: wp(10),
    marginBottom: hp(10),
    alignSelf: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 5,
    marginHorizontal: wp(10),
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: wp(50),
    paddingLeft: 10,
    marginBottom: hp(10),
    justifyContent: 'center',
  },
  linearGradient: {
    paddingVertical: 10,
    borderRadius: 30,
    width: wp(50),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 4,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
});
export default styles;
