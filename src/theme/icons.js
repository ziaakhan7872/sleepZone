import React from 'react';
import {Image} from 'react-native';

import sleep from '../assets/Icons/sleep.png';
import journal from '../assets/Icons/journal.png';
import stats from '../assets/Icons/stats.png';
import profile from '../assets/Icons/profile.png';
import calendar from '../assets/Icons/calendar.png';
import wakeUp from '../assets/Icons/wakeUp.png';
import snore from '../assets/Icons/snore.png';
import nights from '../assets/Icons/nights.png';
import quality from '../assets/Icons/quality.png';
import avgTime from '../assets/Icons/avgTime.png';
import avgSnoring from '../assets/Icons/avgSnoring.png';
import leftArrow from '../assets/Icons/leftArrow.png';
import rightArrow from '../assets/Icons/rightArrow.png';

const Icon = {
  sleep: props => <IconComp source={sleep} {...props} />,
  journal: props => <IconComp source={journal} {...props} />,
  stats: props => <IconComp source={stats} {...props} />,
  profile: props => <IconComp source={profile} {...props} />,
  calendar: props => <IconComp source={calendar} {...props} />,
  wakeUp: props => <IconComp source={wakeUp} {...props} />,
  snore: props => <IconComp source={snore} {...props} />,
  nights: props => <IconComp source={nights} {...props} />,
  quality: props => <IconComp source={quality} {...props} />,
  avgTime: props => <IconComp source={avgTime} {...props} />,
  avgSnoring: props => <IconComp source={avgSnoring} {...props} />,
  leftArrow: props => <IconComp source={leftArrow} {...props} />,
  rightArrow: props => <IconComp source={rightArrow} {...props} />,
};

const IconComp = ({source, size, color}) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        resizeMode: 'contain',
        tintColor: color,
      }}
    />
  );
};

export default Icon;
