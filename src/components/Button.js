import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../theme/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Button({
  btnContainer,
  titleStyle,
  _onPress,
  tintColor,
  title,
  color,
  fontColor,
  borderWidth,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          height: wp('14%'),
          backgroundColor: color,
          color: tintColor,
          borderWidth: borderWidth,
        },
        btnContainer ? btnContainer : {},
      ]}
      activeOpacity={0.9}
      onPress={() => _onPress()}>
      <Text style={{color: fontColor}}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.Primary,
    width: wp('100%') - 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    borderRadius: wp('10%'),
    marginBottom: 8,
    //borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  title: {
    // color: props.fontclr,
    // color: Colors.BtnText,
    fontSize: 15,
    margin: 0,
    padding: 0,
  },
});
export default Button;
