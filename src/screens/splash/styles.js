import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imageContainer: {
    height: hp(100),
    width: wp(100),
    resizeMode: 'contain',
  },
});

export default styles;
