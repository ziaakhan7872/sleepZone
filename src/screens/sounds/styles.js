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
  item: {
    color: '#fff',
    marginLeft: 10,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  container1: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 20,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
    color: '#fff',
  },
  buttonPlay: {
    fontSize: 4,
    color: 'white',
    backgroundColor: '#6A0173',
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 4,
    color: 'white',
    backgroundColor: '#1560BD',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginLeft: 10,
    borderRadius: 5,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  appMusic: {
    marginLeft: 10,
    color: '#fff',
    marginTop: hp(10),
    fontSize: 4.5,
    marginBottom: hp(10),
  },
});

export default styles;
