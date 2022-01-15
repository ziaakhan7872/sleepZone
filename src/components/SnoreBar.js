import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SnoreBar = ({color, sleep, snore, position}) => {
  let a = sleep.split('%')[0];
  let sleepValue = (a * 8) / 100;

  let finSnoreFromsleep = sleepValue - Math.floor(sleepValue);

  let snoreValue = (snore * 8) / 100;
  let findsleepFromsnore = snoreValue - Math.floor(snoreValue);
  //  console.log('findsleepFromsnore', findsleepFromsnore);
  return (
    <LinearGradient
      locations={[findsleepFromsnore, finSnoreFromsleep]}
      colors={color}
      style={{
        height: sleep,
        width: '4%',
        borderRadius: 5,
        position: 'absolute',
        bottom: 0,
        left: position,
      }}
    />
  );
};

export default SnoreBar;
