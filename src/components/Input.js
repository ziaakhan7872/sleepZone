import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 35,
        borderColor: '#4EAA81',
        borderBottomWidth: props.active ? 1 : 0,
      }}>
      {props.icon && (
        <View style={[styles.iconContainer, props.iconContainer]}>
          {props.icon}
        </View>
      )}

      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderStyle={props.placeholderStyle}
        placeholderTextColor={props.textColor}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {props.validateMail && (
          <View style={[styles.iconContainer, props.iconContainer]}>
            {props.validateMail}
          </View>
        )}
      </View>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 15,
  },
});
