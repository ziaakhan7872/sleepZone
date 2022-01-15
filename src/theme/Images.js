import React from 'react';
import {Image} from 'react-native';

import splash from '../assets/Images/splash.png';

const Images = {
  splash: props => <IconComp source={splash} {...props} />,
};

const IconComp = ({source, width, height, resizeMode, tintColor}) => {
  return (
    <Image
      source={source}
      style={{
        width: width,
        height: height,
        resizeMode: resizeMode,
        tintColor: tintColor,
      }}
    />
  );
};

export default Images;
