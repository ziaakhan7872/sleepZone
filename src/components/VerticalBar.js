import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const VerticalBar = ({height, time, value, color, position}) => {
  return (
    <LinearGradient
      colors={color}
      style={{
        height: height,
        width: '26%',
        borderRadius: 5,
        position: 'absolute',
        bottom: 0,
        left: position,
      }}></LinearGradient>
  );
};

export default VerticalBar;
