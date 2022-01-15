import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  backgroundImage: {
    width: wp(100),
    height: hp(100),
  },
  linearGradient: {
    flex: 1,
  },
  monday: {
    color: '#fff',
  },
  centeredView: {
    marginTop: hp(20),
    width: wp(100),
    height: hp(40),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#011344',
  },
  textStyle: {
    color: '#fff',
  },
  buttonClose: {
    marginTop: hp(5),
    padding: 10,
    width: wp(30),
    alignItems: 'center',
    backgroundColor: '#787128',
    borderRadius: 5,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
  },
  dayText: {
    marginTop: hp(1),
    color: '#fff',
  },
  dayText1: {
    color: '#0595FD',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  progressContainer: {
    justifyContent: 'space-between',
    marginTop: hp(4),
    flexDirection: 'row',
    paddingHorizontal: wp(4),
  },
  percentage: {
    color: '#fff',
    fontSize: 6,
  },
  quality: {
    color: '#fff',
  },
  inBedView: {
    alignSelf: 'center',
    paddingRight: wp(10),
  },
  hours: {
    color: '#fff',
    fontSize: 5,
  },
  inbed: {
    color: '#fff',
    alignSelf: 'center',
  },
  graphContainer: {
    alignSelf: 'center',
    marginTop: hp(4),
  },
  legend1: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginRight: 5,
    backgroundColor: 'rgba(255, 154, 10, 1)',
  },
  legend2: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginRight: 5,
    backgroundColor: 'rgba(155, 155, 10, 1)',
  },
  legend3: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginRight: 5,
    backgroundColor: 'rgba(0, 102, 0, 1)',
  },
  legendView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deepSleep: {
    color: '#fff',
    alignSelf: 'center',
  },
  monthView: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  snoreView: {
    //flexDirection: 'row',
    marginHorizontal: wp(6),
    marginTop: hp(4),
    // marginBottom: hp(20),
  },
  journalView: {
    marginHorizontal: wp(6),
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bedView: {
    flexDirection: 'row',
  },
  bedView1: {
    alignSelf: 'center',
    marginLeft: 5,
  },
  whiteColor: {
    color: '#fff',
  },
});
export default styles;
