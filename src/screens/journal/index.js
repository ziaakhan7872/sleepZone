import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Dimensions,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, ResponsiveText, Icon} from '../../components';
import {monthNames, day, shorDayName, days} from '../../components/dummyData';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {dailySnore} from '../../redux/actions/userdataAction';
import RNSoundLevel from 'react-native-sound-level';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {AdMobInterstitial} from 'react-native-admob';
LogBox.ignoreAllLogs();

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const dailySnoreData = useSelector(
    state => state.userdataReducer.dailySnoreData,
  );
  const [graphData, setgraphData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [wentToBed, setwentToBed] = useState('');
  const [findBedTime, setfindBedTime] = useState('');
  const [wakeUpTime, setwakeUpTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [onBed, setOnBed] = useState('');
  const [showSnore, setshowSnore] = useState(0);
  const [findSnoreVal, setfindSnoreVal] = useState('');
  const [quality, setQuality] = useState('');
  const [showquality, setshowQuality] = useState(0);
  const [deepsleepData, setdeepsleepData] = useState([0, 0, 0, 0, 0]);
  const [sleepArrayData, setsleepArrayData] = useState([0, 0, 0, 0, 0]);
  const wakeupEasy = useSelector(state => state.userdataReducer.wakeupEasy);
  const dailystepsData = useSelector(
    state => state.userdataReducer.dailystepsData,
  );

  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

    AdMobInterstitial.requestAd().catch(error => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch(error => console.log('Hello', error));
  }, []);

  const renderScreen = () => {
    let snoreArray = [];
    let bb = dailySnoreData.filter(snore => {
      let findSnore = new Date(snore.snoreDate);
      let findSnore1 = findSnore;
      let cc = snore.snoreDay.map(snoreV => {
        if (snoreV >= 50 && snoreV <= 140) {
          snoreArray.push(findSnore1);
        }
      });
    });
    setfindSnoreVal(snoreArray);
    var firstIndex = findSnoreVal[0];
    var lastIndex = findSnoreVal.slice(-1)[0];
    let getTime1 = new Date(firstIndex);
    let getTime2 = new Date(lastIndex);
    var diff = getTime2 - getTime1;

    var msecend = diff;
    var hh = Math.floor(msecend / 1000 / 60 / 60);
    msecend -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msecend / 1000 / 60);
    msecend -= mm * 1000 * 60;
    var ss = Math.floor(msecend / 1000);
    msecend -= ss * 1000;
    var snoreTime = hh + '  h ' + mm + '  m';
    if (isNaN(snoreTime)) {
      //console.log('nan value of snore');
    } else {
      setshowSnore(snoreTime);
    }

    //Find quality of sleep
    var qmint = quality / 1000 / 60;
    var devideMs = diff / 1000 / 60;
    let aaaa = (devideMs / qmint) * 100;
    if (isNaN(aaaa)) {
      // console.log('aaaa======>', aaaa);
    } else {
      var num = aaaa.toFixed(0);
      setshowQuality(num);
      renderScreen();
    }
  };

  //First use Effect only show snore time in mint hour seeconds
  useEffect(() => {
    setInterval(() => {
      renderScreen();
    }, 2000);
  }, [showquality]);

  //Second use Effect only show Deep sleep && sleep && awake data
  useEffect(() => {
    let deepSleepArray = [0, 0, 0, 0, 0];
    let sleepArray = [0, 0, 0, 0, 0];
    const findSnoreData = dailySnoreData.filter((item, index) => {
      let aa = item.snoreDay.map(deepsleep => {
        if (deepsleep < 40) {
          deepSleepArray.shift();
          deepSleepArray.push(deepsleep);
        } else if (deepsleep >= 40 && deepsleep <= 110) {
          sleepArray.shift();
          sleepArray.push(deepsleep);
        }
      });
    });
    setdeepsleepData(deepSleepArray);
    setsleepArrayData(sleepArray);
  }, []);

  //Third use Effect show bed time && start snoring time && send data into redux
  useEffect(() => {
    findBetTime();
    startSnoring();
    setInterval(() => {
      dailySnoreDispatch();
    }, 2000);

    if (isFocused) {
      findbedAndWakeTime();
    }
  }, [isFocused]);
  const dailySnoreDispatch = () => {
    let snoringData = {
      snoreDay: graphData,
      snoreDate: new Date(),
    };
    dailySnoreData.push(snoringData);
    dispatch(dailySnore(dailySnoreData));
    renderScreen();
  };
  const startSnoring = () => {
    RNSoundLevel.start();
    RNSoundLevel.onNewFrame = data => {
      let aaa = data.value + 160;
      array.shift();
      array.push(aaa);
      setgraphData([...array]);
    };
  };
  const findBetTime = () => {
    let findLast =
      wakeupEasy[wakeupEasy.length >= 0 ? wakeupEasy.length - 1 : null];
    let sleepData = new Date(findLast ? findLast.sleepTime : 0);
    let wakeData = new Date(findLast ? findLast.wakeupTime : 0);
    var diff = wakeData - sleepData;
    setQuality(diff);
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var timeset = hh + '  hh ' + mm + '  mm';
    setOnBed(timeset);
  };
  const findbedAndWakeTime = () => {
    let array = dailystepsData;
    //let lastElement = array.pop();
    let lastElement = array[array.length > 1 ? array.length - 1 : 0];
    let findLastIndex = new Date(lastElement ? lastElement.dailydate : 0);
    setfindBedTime(
      findLastIndex.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
    let status = wakeupEasy
      .map(item => {
        return item;
      })
      .filter((filterItem, index) => {
        let sleepDate = new Date(filterItem.sleepTime);
        let findedSleepDate = sleepDate.getDate();
        let wakeupTime = new Date(filterItem.wakeupTime);
        let findedwakeuptime = wakeupTime.getDate();
        let findTodayDate = new Date();
        let findedTodayDate = findTodayDate.getDate();
        if (findedSleepDate == findedTodayDate) {
          setwentToBed(
            sleepDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          );
        }
        if (findedwakeuptime == findedTodayDate) {
          setwakeUpTime(
            wakeupTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          );
        }
      });

    var startTime = moment(findBedTime, 'hh:mm:ss a');
    var endTime = moment(wentToBed, 'hh:mm:ss a');
    var test = endTime.diff(startTime, 'hours:mm:ss');
    //its only for sleep time
  };

  //Find day name today date and next day and month name
  let dayName = day[date.getDay()];
  let monthName = date.getMonth();
  let todayDate = date.getDate();
  //Find day name from array
  var d = new Date();
  var getDay = days[d.getDay()];
  const handleDate = () => {
    let today = new Date();
    if (date != today) {
      Alert.alert('Warning !', `You don't have data on this date `, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <Container backgroundColor="#011244" barStyle="light-content">
      <LinearGradient
        colors={['#011244', '#190937', '#250332']}
        style={styles.linearGradient}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.mainContainer}>
            <ResponsiveText style={styles.monday}>
              {/* day monthNames get from dummyData */}
              {dayName} {todayDate}-{todayDate + 1 <= 30 ? todayDate + 1 : null}{' '}
              {monthNames[monthName]}
            </ResponsiveText>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon.calendar size={26} />
              {/* TODO: */}

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={{marginTop: 20}}>
                    <DatePicker
                      date={date}
                      onDateChange={date => setDate(date)}
                      minuteInterval={10}
                      textColor={'#fff'}
                      //  androidVariant={'nativeAndroid'}
                      mode={'date'}
                      // fadeToColor={'#101247'}
                    />
                  </View>
                  <Pressable
                    style={styles.buttonClose}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setDate(date);
                      handleDate();
                    }}>
                    <Text style={styles.textStyle}>OK</Text>
                  </Pressable>
                </View>
              </Modal>
            </TouchableOpacity>
          </View>
          <View style={styles.dayContainer}>
            {shorDayName.map((vale, index) => {
              return (
                <Text
                  style={
                    vale.dName == getDay ? styles.dayText1 : styles.dayText
                  }>
                  {vale.dName}
                </Text>
              );
            })}
          </View>
          <View style={styles.progressContainer}>
            <AnimatedCircularProgress
              size={150}
              width={20}
              fill={showquality ? showquality : 0}
              tintColor="#4EB9F0"
              backgroundColor="#1A2654">
              {fill => (
                <View>
                  <ResponsiveText style={styles.percentage}>
                    {showquality == NaN ? '80' : showquality}%
                  </ResponsiveText>
                  <ResponsiveText style={styles.quality}>
                    quality
                  </ResponsiveText>
                </View>
              )}
            </AnimatedCircularProgress>
            <View style={styles.inBedView}>
              <ResponsiveText style={styles.hours}>
                {onBed ? onBed : '2 hh 39 mm'}
              </ResponsiveText>
              <ResponsiveText style={styles.inbed}>In bed</ResponsiveText>
            </View>
          </View>
          <View style={styles.graphContainer}>
            <View style={styles.legendView}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.legend1} />
                <ResponsiveText style={styles.deepSleep}>
                  Deep sleep
                </ResponsiveText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={styles.legend2} />
                <ResponsiveText style={styles.deepSleep}>Sleep</ResponsiveText>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.legend3} />
                <ResponsiveText style={styles.deepSleep}>Awake</ResponsiveText>
              </View>
            </View>
            <LineChart
              bezier
              withHorizontalLabels={true}
              withVerticalLabels={true}
              withHorizontalLines={false}
              withVerticalLines={false}
              data={{
                // labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6'],
                labels: sleepArrayData,
                datasets: [
                  {
                    // data: [1, 4, 12, 8, 6, 15],
                    data: deepsleepData,
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(255,155,10,${opacity})`,
                  },
                  {
                    // data: [5, 7, 9, 10, 8, 10],
                    data: sleepArrayData,
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(155,155,10, ${opacity})`,
                  },
                  {
                    data: [10, 14, 18, 19, 20, 25],
                    strokeWidth: 3,

                    color: (opacity = 1) => `rgba(0,102,0, ${opacity})`,
                  },
                ],

                // legend: ['Deep sleep', 'Sleep', 'Awake'],
              }}
              width={wp(100)}
              height={200}
              chartConfig={{
                fillShadowGradient: 'white',
                fillShadowGradientOpacity: 0.1,
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={{
                //marginVertical: 8,
                borderRadius: 16,
                textColor: '#fff',
              }}
            />
          </View>
          {/* TODO:one month before and one mone latter logic part */}
          {/* <View style={styles.monthView}>
            <TouchableOpacity
              onPress={() =>
                console.log(`monthName`, monthNames[monthName - 1])
              }>
              <ResponsiveText style={styles.whiteColor}>
                {monthNames[monthName - 1]}
              </ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log(`monthName`, monthNames[monthName])}>
              <ResponsiveText style={styles.whiteColor}>
                {monthNames[monthName]}
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                console.log(`monthName`, monthNames[monthName + 1])
              }>
              <ResponsiveText style={styles.whiteColor}>
                {monthNames[monthName + 1]}
              </ResponsiveText>
            </TouchableOpacity>
          </View> */}
          {/* TODO:one month before and one mone latter logic part */}

          <View style={styles.snoreView}>
            <ResponsiveText style={styles.whiteColor}>Snore </ResponsiveText>
            {/* <ResponsiveText style={styles.whiteColor}>
              ----------------------------------------------------------------
            </ResponsiveText> */}
            {/* TODO:handle sonre */}
            <LineChart
              data={{
                labels: graphData,
                datasets: [
                  {
                    data: graphData,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 40} // from react-native
              height={200}
              chartConfig={{
                backgroundColor: '#290C48',
                backgroundGradientFrom: '#290C48',
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                backgroundGradientTo: '#290C48',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },

                propsForBackgroundLines: {
                  strokeWidth: 0,
                },
              }}
              bezier
              style={{
                width: wp(80),
              }}
            />
          </View>
          <View style={styles.journalView}>
            <View style={styles.bedView}>
              <View style={{marginTop: 10}}>
                <Icon.sleep size={20} />
              </View>
              <View style={styles.bedView1}>
                <ResponsiveText style={styles.whiteColor}>
                  {wentToBed ? wentToBed : '1:20am'}
                </ResponsiveText>
                <ResponsiveText style={styles.whiteColor}>
                  Went to bed
                </ResponsiveText>
              </View>
            </View>

            <View style={styles.bedView}>
              <View style={{marginTop: 10}}>
                <Icon.wakeUp size={20} />
              </View>
              <View style={styles.bedView1}>
                <ResponsiveText style={styles.whiteColor}>
                  {wakeUpTime ? wakeUpTime : '1:20am'}
                </ResponsiveText>
                <ResponsiveText style={styles.whiteColor}>
                  Wake up
                </ResponsiveText>
              </View>
            </View>

            <View style={styles.bedView}>
              <View style={{marginTop: 5}}>
                <Icon.snore size={26} />
              </View>
              <View style={styles.bedView1}>
                <ResponsiveText style={styles.whiteColor}>
                  {showSnore ? showSnore : '0 min'}
                </ResponsiveText>
                <ResponsiveText style={styles.whiteColor}>Snore</ResponsiveText>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 70}} />
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default index;
