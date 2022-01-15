import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  mainContainer: {
    padding: 20,
  },
  profile: {
    marginTop: hp(1),
    color: '#fff',
    fontSize: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgView1: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  border: {
    color: '#fff',
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomWidth: 2,
    width: wp(15),
    textAlign: 'center',
    marginLeft: 5,
  },
  text: {
    color: '#fff',
    fontSize: 5,
    fontWeight: 'bold',
  },
  soundView: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#003358',
    borderWidth: 1,
    paddingVertical: hp(4),
    paddingHorizontal: wp(4),
  },
});

export default styles;
