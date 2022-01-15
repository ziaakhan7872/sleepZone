import {
  USER_NAME,
  WAKEUPEASY,
  NOWAKEUPWINDOW,
  SLEEPANALYZE,
  DAILYSTEP,
  DAILYSNORE,
  WAKEPHASETIME,
} from '../types';

export const adduserName = usernameObj => {
  return {
    type: USER_NAME,
    payload: usernameObj,
  };
};
export const alaramDetails = wakeupEasy => {
  return {
    type: WAKEUPEASY,
    payload: wakeupEasy,
  };
};
export const noWakeUpDetails = nowakeupWindow => {
  return {
    type: NOWAKEUPWINDOW,
    payload: nowakeupWindow,
  };
};
export const onlySleepDetails = sleepAnalyze => {
  return {
    type: SLEEPANALYZE,
    payload: sleepAnalyze,
  };
};
export const countDailySteps = dailystepsData => {
  return {
    type: DAILYSTEP,
    payload: dailystepsData,
  };
};
export const dailySnore = dailySnoreData => {
  return {
    type: DAILYSNORE,
    payload: dailySnoreData,
  };
};
export const wakeup = objwakePhase => {
  console.log('objwakePhase', objwakePhase);
  return {
    type: WAKEPHASETIME,
    payload: objwakePhase,
  };
};
