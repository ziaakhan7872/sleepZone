import {
  USER_NAME,
  WAKEUPEASY,
  NOWAKEUPWINDOW,
  SLEEPANALYZE,
  DAILYSTEP,
  DAILYSNORE,
  WAKEPHASETIME,
} from '../types';

const initState = {
  userName: '',
  wakeupEasy: [],
  nowakeupWindow: [],
  sleepAnalyze: [],
  dailystepsData: [],
  dailySnoreData: [],
  wakeUpPhase: [],
};

const userdataReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case WAKEUPEASY:
      return {
        ...state,
        wakeupEasy: action.payload,
      };
    case NOWAKEUPWINDOW:
      return {
        ...state,
        nowakeupWindow: action.payload,
      };
    case SLEEPANALYZE:
      return {
        ...state,
        sleepAnalyze: action.payload,
      };
    case DAILYSTEP:
      return {
        ...state,
        dailystepsData: action.payload,
      };
    case DAILYSNORE:
      return {
        ...state,
        dailySnoreData: action.payload,
      };
    case WAKEPHASETIME:
      return {
        ...state,
        wakeUpPhase: action.payload,
      };

    default:
      return state;
  }
};

export default userdataReducer;
