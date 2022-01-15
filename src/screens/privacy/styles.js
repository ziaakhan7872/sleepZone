import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#011244',
  },
  respectPrivacy: {
    color: '#FF9D55',
    fontSize: 5,
    alignSelf: 'center',
    marginTop: hp(10),
  },
  privacy: {
    color: '#fff',
    fontSize: 4.5,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: wp(15),
    marginTop: hp(10),
  },
  linearGradient: {
    paddingVertical: 10,
    borderRadius: 30,
    width: wp(30),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 4,
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});

export default styles;
