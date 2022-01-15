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
  lotiieContainer: {
    marginTop: hp(8),
    paddingLeft: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  lottieStyle: {
    height: 30,
    width: wp(80),
    alignSelf: 'center',
  },
  songName: {
    color: '#fff',
    alignSelf: 'center',
  },
  timeContainer: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
  wakeUp: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    width: wp(50),
    textAlign: 'center',
  },
  wakeUp1: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    width: wp(60),
    textAlign: 'center',
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
    margin: 3,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: hp(5),
  },

  pagerStyle: {
    flex: 0.8,
  },
  noAlaram: {
    marginTop: hp(20),
  },
  alaramContainer: {
    marginTop: hp(26),
  },
  modalStyle: {
    width: wp(80),
    height: hp(20),
    backgroundColor: 'rgba(21,17,72,1)',
    position: 'absolute',
    marginTop: hp(50),
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  successMsg: {
    color: '#fff',
    marginTop: hp(2),
    marginLeft: wp(4),
    fontSize: 6,
  },
  setalaram: {
    color: '#fff',
    marginTop: hp(1),
    marginLeft: wp(6),
  },
  okButton: {
    color: '#fff',
    alignSelf: 'flex-end',
    marginTop: hp(6),
    marginRight: wp(4),
  },
});

export default styles;
