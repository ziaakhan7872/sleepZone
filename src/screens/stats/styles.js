import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  linearGradient: {
    width: wp(100),
    height: hp(100),
  },
  statistics: {
    marginTop: hp(4),
    color: '#fff',
    fontSize: 6,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tabsBtn: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  days: {
    color: '#fff',
  },
  daysView: {
    backgroundColor: '#143257',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: 10,
  },
  buttonColor: {
    backgroundColor: '#000066',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: 10,
  },
  quality: {
    color: '#fff',
    marginTop: hp(6),
    fontSize: 4.5,
    fontWeight: 'bold',
    marginHorizontal: wp(4),
  },
  dayView: {
    height: hp(5),
    justifyContent: 'center',
    marginLeft: wp(4),
  },
  verticalView: {
    marginLeft: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(95),
  },
  mainView: {
    height: hp(40),
  },
  innerView: {
    height: hp(35),
  },
  wentobed: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: 4.5,
    fontWeight: 'bold',
    marginHorizontal: wp(4),
  },
  bedView: {
    alignSelf: 'center',
    // height: 200,
  },
  wokeTimeView: {
    height: hp(25),
    //paddingLeft: 20,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  wokeTime: {
    color: '#fff',
    marginTop: hp(4),
    fontSize: 4.5,
    fontWeight: 'bold',
    marginHorizontal: wp(4),
  },
  snore: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: 4.5,
    fontWeight: 'bold',
    marginHorizontal: wp(4),
  },
});

export default styles;
