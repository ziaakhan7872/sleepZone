import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  arrow: {
    padding: 20,
  },
  sounds: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 6,
    fontWeight: 'bold',
  },
  soundText: {
    color: '#fff',
    fontSize: 5,
    fontWeight: 'bold',
  },
  mainView: {
    padding: 20,
  },
  radioBtn: {
    justifyContent: 'space-between',
  },
  horizentolLine: {
    marginTop: hp(3),
    width: wp(20),
    height: 2,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  textView: {
    marginTop: hp(2),
    width: wp(90),

    alignSelf: 'center',
    marginBottom: hp(4),
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 4.5,
  },
});

export default styles;
