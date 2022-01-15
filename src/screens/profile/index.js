import React, {useEffect, useState} from 'react';
import styles from './styles';
import {View, ScrollView} from 'react-native';
import {Container, Icon, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {AdMobInterstitial} from 'react-native-admob';

const index = ({navigation}) => {
  const wakeupEasy = useSelector(state => state.userdataReducer.wakeupEasy);
  const dailySnore = useSelector(state => state.userdataReducer.dailySnoreData);

  const [showNights, setshowNights] = useState(0);
  const [quality, setQuality] = useState(0);
  const [snore, setSnore] = useState(0);
  const [averageTime, setaverageTime] = useState(0);

  //function for getting total nights
  const totalNight = () => {
    setshowNights(wakeupEasy.length);
  };

  const totalQuality = () => {
    let array = [];
    let snoreArray = [];
    wakeupEasy.map((item, index) => {
      let wakeTime = new Date(item.wakeupTime);
      let sleepTime = new Date(item.sleepTime);
      let wakeAndsleepTime = wakeTime - sleepTime;
      array.push(wakeAndsleepTime);
      let addValueOfArray = array.reduce((a, b) => a + b, 0);
      let diff = addValueOfArray / wakeupEasy.length;
      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;
      var timeset = hh + mm;
      console.log('timeset', timeset >= 50 <= 80);
      if (wakeupEasy.length >= 2 && wakeupEasy.length <= 3) {
        setQuality(60);
        setSnore(40);
      } else if (wakeupEasy.length >= 3 && wakeupEasy.length <= 4) {
        setQuality(87);
        setSnore(13);
      } else if (wakeupEasy.length >= 4 && wakeupEasy.length <= 5) {
        setQuality(77);
        setSnore(23);
      } else if (wakeupEasy.length >= 5 && wakeupEasy.length <= 6) {
        setQuality(97);
        setSnore(3);
      } else if (wakeupEasy.length >= 6 && wakeupEasy.length <= 7) {
        setQuality(66);
        setSnore(24);
      } else if (wakeupEasy.length >= 7 && wakeupEasy.length <= 8) {
        setQuality(71);
        setSnore(29);
      } else if (wakeupEasy.length >= 8 && wakeupEasy.length <= 9) {
        setQuality(84);
        setSnore(16);
      } else {
        let x = Math.floor(Math.random() * 100 + 1);
        if (x >= 60) {
          setQuality(x);
          setSnore(100 - x);
        } else {
          setQuality(94);
          setSnore(6);
        }
      }
    });

    dailySnore.map(snore => {
      // console.log('snore====>', snore.snoreDate);
      let findDate = new Date(snore.snoreDate);
      var date = new Date(snore.snoreDate); // some mock date
      var milliseconds = date.getTime();
      //console.log('milliseconds', milliseconds);
      snoreArray.push(milliseconds);
      var snoreAddedValue = snoreArray.reduce((a, b) => a + b, 0);
      //  console.log('snoreAddedValue', snoreAddedValue);
    });
  };
  let avgArray = [];
  const avgSleepTime = () => {
    wakeupEasy.map(sleep => {
      let wkTime = new Date(sleep.wakeupTime);
      let slTime = new Date(sleep.sleepTime);
      let aa = wkTime - slTime;
      avgArray.push(aa);
    });

    let result = avgArray.reduce((a, b) => a + b, 0);
    var msec = result;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var timeset = hh + '  hh ';
    setaverageTime(timeset);
  };
  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

    AdMobInterstitial.requestAd().catch(error => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch(error => console.log('Hello', error));
  }, []);

  useEffect(() => {
    totalQuality();
    const unsubscribe = navigation.addListener('focus', () => {
      totalNight();
      avgSleepTime();
    });

    return unsubscribe;

    //get total quality
  }, [navigation]);
  return (
    <Container backgroundColor="#011244" barStyle="light-content">
      <LinearGradient
        colors={['#011244', '#190937', '#250332']}
        style={styles.linearGradient}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.mainContainer}>
            <ResponsiveText style={styles.profile}>Profile</ResponsiveText>
            <View style={styles.imgView}>
              <View>
                <Icon.nights size={30} />
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText style={{color: '#fff', alignSelf: 'center'}}>
                    Nights
                  </ResponsiveText>
                  <ResponsiveText style={styles.border}>
                    {showNights ? showNights : 0}
                  </ResponsiveText>
                </View>
              </View>

              <View>
                <Icon.quality size={30} />
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText style={{color: '#fff', alignSelf: 'center'}}>
                    Quality
                  </ResponsiveText>
                  <ResponsiveText style={styles.border}>
                    {wakeupEasy.length == 1 ? 0 : quality}
                  </ResponsiveText>
                </View>
              </View>
            </View>
            <View style={styles.imgView1}>
              <View>
                <Icon.avgTime size={30} />
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText style={{color: '#fff', alignSelf: 'center'}}>
                    Avg time
                  </ResponsiveText>
                  <ResponsiveText style={styles.border}>
                    {wakeupEasy.length == 1 ? 0 : averageTime}
                  </ResponsiveText>
                </View>
              </View>

              <View>
                <Icon.avgSnoring size={30} />
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText style={{color: '#fff', alignSelf: 'center'}}>
                    Snore
                  </ResponsiveText>
                  <ResponsiveText style={styles.border}>
                    {wakeupEasy.length == 1 ? 0 : snore}
                  </ResponsiveText>
                </View>
              </View>
            </View>
            {/* end of nights and quality,avgTime and snoring */}

            <TouchableOpacity
              style={styles.soundView}
              onPress={() => navigation.navigate('sounds')}>
              <ResponsiveText style={styles.text}>Sounds</ResponsiveText>
              <Icon.rightArrow size={25} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.soundView}
              onPress={() => navigation.navigate('wakeupPhase')}>
              <ResponsiveText style={styles.text}>Wake up phase</ResponsiveText>
              <Icon.rightArrow size={25} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.soundView}
              onPress={() => navigation.navigate('help')}>
              <ResponsiveText style={styles.text}>Help</ResponsiveText>
              <Icon.rightArrow size={25} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default index;
