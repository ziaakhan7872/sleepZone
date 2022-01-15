import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';
import {tracks} from '../../components/dummyData';
import {AdMobInterstitial} from 'react-native-admob';
import PushNotification, {Importance} from 'react-native-push-notification';

import {
  View,
  Image,
  ImageBackground,
  Text,
  Pressable,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  alaramDetails,
  noWakeUpDetails,
  onlySleepDetails,
  countDailySteps,
} from '../../../src/redux/actions/userdataAction';

import {
  IndicatorViewPager,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Pedometer from 'react-native-pedometer-ios-android';

const index = () => {
  const dispatch = useDispatch();

  let _onFinishedPlayingSubscription = null;
  let _onFinishedLoadingSubscription = null;

  const [stepsData, setStepsData] = useState(0);
  const [modal, setModal] = useState(false);
  const [sleepAnalyzemodal, setsleepAnalyzemodal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const wakeupEasy = useSelector(state => state.userdataReducer.wakeupEasy);
  const nowakeupWindow = useSelector(
    state => state.userdataReducer.nowakeupWindow,
  );
  const sleepAnalyze = useSelector(state => state.userdataReducer.sleepAnalyze);
  const dailystepsData = useSelector(
    state => state.userdataReducer.dailystepsData,
  );
  const getTime = useSelector(state => state.userdataReducer.wakeUpPhase);
  //console.log('getTime======>>>', getTime.timeInterval);

  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

    AdMobInterstitial.requestAd().catch(error => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch(error => console.log('Hello', error));
  }, []);

  useEffect(() => {
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log(`song stop`);
        SoundPlayer.stop();
      },
    );

    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
    };
  }, []);

  useEffect(() => {
    findSteps();
  }, []);

  const findSteps = () => {
    Pedometer.isSupported().then(result => {
      if (result) {
        console.log('Sensor TYPE_STEP_COUNTER is supported on this device');

        const myModuleEvt = new NativeEventEmitter(NativeModules.Pedometer);
        myModuleEvt.addListener('StepCounter', data => {
          console.log('STEPS', data.steps);
          setStepsData(data.steps);
          let stepsData = {
            dailysteps: data.steps,
            dailydate: new Date(),
          };
          dailystepsData.push(stepsData);
          dispatch(countDailySteps(dailystepsData));
        });

        Pedometer.startStepCounter();
      } else {
        console.log('Sensor TYPE_STEP_COUNTER is not supported on this device');
      }
    });
  };

  const makeid = () => {
    var length = 3;
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const pushNotify = alaram => {
    let alaramtime = new Date(new Date(alaram).getTime() + 60 * 60 * 24 * 1000);
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        importance: Importance.HIGH,
        vibrate: true,
        soundName: 'default',
      },
      created => console.log(`createChannel returned---> '${created}'`),
    );

    PushNotification.localNotificationSchedule({
      id: 222,
      channelId: 'channel-id',
      title: 'Sleep Zone',
      message: 'Its time to your sleep.',
      date: alaramtime,
      allowWhileIdle: true,
      repeatType: 'day',
    });
  };

  const handleWakeUpEasy = () => {
    let date1 = new Date();
    let alaram = new Date();
    alaram.setDate(date1.getDate());
    alaram.setHours(date1.getHours(), date1.getMinutes());
    wakeupEasy.push({
      id: makeid(),
      alaramTime: date,
      wakeupTime: date,
      sleepTime: new Date(),
    });
    pushNotify(alaram);
    dispatch(alaramDetails(wakeupEasy));
    setModal(true);
  };

  const handleNowakeUp = () => {
    nowakeupWindow.push({
      id: makeid(),
      alaramTime: date,
      wakeupTime: date,
      sleepTime: new Date(),
    });
    dispatch(noWakeUpDetails(nowakeupWindow));

    // Alert.alert('Success', 'Successfully set your alarm', [
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
    setModal(true);
  };

  const handleSleep = () => {
    sleepAnalyze.push({
      id: makeid(),
      wakeupTime: date,
      sleepTime: new Date(),
    });
    dispatch(onlySleepDetails(sleepAnalyze));
    // Alert.alert('Success', 'Successfully set sleep analyze', [
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);

    setsleepAnalyzemodal(true);
  };

  const playSong = () => {
    try {
      SoundPlayer.playUrl(tracks[0].url);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  const playSong1 = () => {
    console.log(`play song1`);
    try {
      _onFinishedPlayingSubscription.remove();
      console.log('remove listner from playSong1');
      SoundPlayer.playUrl(tracks[3].url);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  const pauseSong = () => {
    SoundPlayer.pause();
  };

  return (
    <Container backgroundColor="#011244" barStyle="light-content">
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/Images/home.png')}
        style={styles.backgroundImage}>
        <View style={styles.lotiieContainer}>
          <LottieView
            style={styles.lottieStyle}
            source={require('../../assets/LottieFiles/songs.json')}
            autoPlay={true}
            loop={true}
          />
          <TouchableOpacity
            onPress={() => {
              {
                toggle ? pauseSong() : playSong();
                setToggle(!toggle);
              }
            }}>
            {toggle ? (
              <Image source={require('../../assets/Icons/pause.png')} />
            ) : (
              <Image source={require('../../assets/Icons/play.png')} />
            )}
          </TouchableOpacity>
        </View>
        <ResponsiveText style={styles.songName}>Summer jam</ResponsiveText>

        <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={<PagerDotIndicator pageCount={3} />}>
          {/* View 1 */}
          <View>
            <View style={styles.timeContainer}>
              <DatePicker
                date={date}
                minimumDate={new Date()}
                onDateChange={date => setDate(date)}
                minuteInterval={
                  getTime.timeInterval == null ? 10 : getTime.timeInterval
                }
                textColor={'#fff'}
                androidVariant={'nativeAndroid'}
                mode={'time'}
                fadeToColor={'#101247'}
              />
            </View>
            <Text style={styles.wakeUp} numberOfLines={2} ellipsizeMode="tail">
              Wake up easy between 4:00am - 5:00am
            </Text>
            <Pressable onPress={() => handleWakeUpEasy()} style={styles.button}>
              <LinearGradient
                colors={['#020F32', '#190937', '#250332']}
                style={styles.linearGradient}>
                <ResponsiveText style={styles.buttonText}>Start</ResponsiveText>
              </LinearGradient>
            </Pressable>
          </View>
          {/* end of View 1 */}

          {/*View 2*/}
          <View>
            <View style={styles.timeContainer}>
              <DatePicker
                date={date}
                onDateChange={date => setDate(date)}
                minuteInterval={10}
                textColor={'#fff'}
                androidVariant={'nativeAndroid'}
                mode={'time'}
                fadeToColor={'#101247'}
              />
            </View>
            <Text style={styles.wakeUp} numberOfLines={2} ellipsizeMode="tail">
              No wake upwindow.
            </Text>
            <Text style={styles.wakeUp1}>Alaram will go off at 4:00pm</Text>
            <Pressable onPress={() => handleNowakeUp()} style={styles.button}>
              <LinearGradient
                colors={['#020F32', '#190937', '#250332']}
                style={styles.linearGradient}>
                <ResponsiveText style={styles.buttonText}>Start</ResponsiveText>
              </LinearGradient>
            </Pressable>
          </View>
          {/* end of View 2*/}

          {/* View 3 */}
          <View>
            <View style={styles.alaramContainer}>
              <Text style={styles.wakeUp}>No alaram.</Text>
              <Text style={styles.wakeUp}>Only sleep analyze</Text>
              <Pressable onPress={() => handleSleep()} style={styles.noAlaram}>
                <LinearGradient
                  colors={['#020F32', '#190937', '#250332']}
                  style={styles.linearGradient}>
                  <ResponsiveText style={styles.buttonText}>
                    Start
                  </ResponsiveText>
                </LinearGradient>
              </Pressable>
            </View>
          </View>

          {/*end of  View 3 */}
        </IndicatorViewPager>
        {modal ? (
          <View style={styles.modalStyle}>
            <ResponsiveText style={styles.successMsg}> Success!</ResponsiveText>
            <ResponsiveText style={styles.setalaram}>
              Successfully set your alarm
            </ResponsiveText>
            <Pressable
              onPress={() => setModal(false)}
              hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}>
              <ResponsiveText style={styles.okButton}>Ok</ResponsiveText>
            </Pressable>
          </View>
        ) : null}
        {sleepAnalyzemodal ? (
          <View style={styles.modalStyle}>
            <ResponsiveText style={styles.successMsg}> Success!</ResponsiveText>
            <ResponsiveText style={styles.setalaram}>
              Successfully set sleep analyze
            </ResponsiveText>
            <Pressable onPress={() => setsleepAnalyzemodal(false)}>
              <ResponsiveText style={styles.okButton}>Ok</ResponsiveText>
            </Pressable>
          </View>
        ) : null}
      </ImageBackground>
    </Container>
  );
};

export default index;
