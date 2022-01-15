import React, {useState, useEffect} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, ResponsiveText} from '../../components';
import VerticalBar from '../../components/VerticalBar';
import {LineChart} from 'react-native-chart-kit';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AdMobInterstitial} from 'react-native-admob';

const index = ({navigation}) => {
  const [daycolor, setdayColor] = useState(true);
  const [weekcolor, setweekColor] = useState(false);
  const [monthColor, setmonthColor] = useState(false);
  const [allColor, setallColor] = useState(false);
  const [days, setDays] = useState(true);
  const [weeks, setWeeks] = useState(false);
  const [months, setMonths] = useState(false);
  const [all, setAll] = useState(false);
  const [wentBed, setwentBed] = useState(0);
  const [wakeTime, setWakeTime] = useState(0);
  const [sleepQ, setSleepQ] = useState(10);
  const [sleepQweek, setsleepQweek] = useState(10); //10 is initial value
  const [snoreValue, setSnoreValue] = useState(5); // 5 is initial value
  const [bedTime, setbedTime] = useState(5); // 5 is initial value
  const [showSnore, setshowSnore] = useState([40, 45, 28, 80, 99, 43, 50]); //array data is initial data
  const [timeOnBed, settimeOnBed] = useState([]); //array data is initial data
  const [wakeForDay, setwakeForDay] = useState([0, 0, 0, 0, 0, 0, 0]); //array data is initial data
  const [wentToBedForDay, setwentToBedForDay] = useState([0, 0, 0, 0, 0, 0, 0]); //array data is initial data
  const [timeOnbed1, setTimeOnbed1] = useState([1, 2, 3, 4, 5, 6, 7]); //array data is initial data
  const [timeOnbed2, setTimeOnbed2] = useState([1, 2, 3, 4, 5, 6, 7]); //array data is initial data
  const [timeOnbed3, setTimeOnbed3] = useState([1, 2, 3, 4, 5, 6, 7]); //array data is initial data

  //End of states
  const wakeupEasy = useSelector(state => state.userdataReducer.wakeupEasy);
  const dailySnore = useSelector(state => state.userdataReducer.dailySnoreData);

  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

    AdMobInterstitial.requestAd().catch(error => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch(error => console.log('Hello', error));
  }, []);

  const getWeekDays = () => {
    let newArrayforweekSleep = [0, 0, 0, 0, 0, 0];
    let randomArray = [0, 0, 0, 0, 0, 0, 0];
    let bedTimeArray = [0, 0, 0, 0, 0, 0, 0];
    timeOnBed.map(z => {
      if (z == 0) {
        newArrayforweekSleep.push(z);
      } else {
        let q = (z / z) * 100;
        bedTimeArray.push(q);
        bedTimeArray.shift();
        let random = Math.floor(Math.random() * 15 + 1);
        randomArray.push(random);
        randomArray.shift();
        let value = q - random;
        newArrayforweekSleep.push(value);
        newArrayforweekSleep.shift();
      }
      setTimeOnbed2(randomArray);
      setTimeOnbed1(newArrayforweekSleep);
      setTimeOnbed3(bedTimeArray);
    });
  };

  const getSingleDay = () => {
    let day1 = wakeupEasy[wakeupEasy.length < 0 ? null : wakeupEasy.length - 1];
    let day2 = new Date(day1?.sleepTime);
    setwentBed(day2.getHours());
    let day3 = new Date(day1?.wakeupTime);

    setWakeTime(day3.getHours());
    let day4 = day3 - day2;
    var msec = day4;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    let getTimeset = hh;
    let aaaaa = (getTimeset / getTimeset) * 100;
    setbedTime(aaaaa);
    let x = Math.floor(Math.random() * 15 + 1);
    setSleepQ(aaaaa - x);
    setSnoreValue(x);
  };

  //first useEffect use for went to bed and woke up time

  const findDailySnore = () => {
    let dailyArray = [];
    let finalSnore = [0, 0, 0, 0, 0, 0, 0];
    let aaa = dailySnore.filter(snoreData => {
      let today = new Date(snoreData.snoreDate);
      let todayDate = new Date();
      if (today.toLocaleDateString() == todayDate.toLocaleDateString()) {
        dailyArray.push(snoreData.snoreDay);
      }
    });
    dailyArray.map(snoreV1 => {
      snoreV1.map(snoreV2 => {
        if (snoreV2 > 50 && snoreV2 < 140) {
          finalSnore.push(snoreV2);
          finalSnore.shift();
        }
      });
    });
    setshowSnore(finalSnore);
  };
  useEffect(() => {
    findDailySnore();
    getSingleDay();
    const unsubscribe = navigation.addListener('focus', () => {
      getWeekDays();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    let wakeTimeOneDay = [0, 0, 0, 0, 0, 0, 0];
    let wentToBedOneDay = [0, 0, 0, 0, 0, 0, 0];
    const BedTime = wakeupEasy.filter(item => {
      let wentToBed = new Date(item.sleepTime);
      let bedTimeDate = new Date(item.wakeupTime);
      let wentToBedHours = wentToBed.getHours();
      let findedBedTime = bedTimeDate.getHours();
      wakeTimeOneDay.push(findedBedTime);
      wakeTimeOneDay.shift();
      setwakeForDay(wakeTimeOneDay);
      wentToBedOneDay.push(wentToBedHours);
      wentToBedOneDay.shift();
      setwentToBedForDay(wentToBedOneDay);
    });
  }, []);

  useEffect(() => {
    let valueOfTimeInBedArray = [0, 0, 0, 0, 0, 0, 0];
    let finalValueOfTimeInBedArray = [0, 0, 0, 0, 0, 0, 0];
    wakeupEasy.filter(time => {
      let sleepValue = new Date(time.sleepTime);
      let wakeValue = new Date(time.wakeupTime);
      let valueOfTimeInBed = wakeValue - sleepValue;
      if (valueOfTimeInBed < 0) {
        console.log('Do nothing');
      } else {
        valueOfTimeInBedArray.push(valueOfTimeInBed);
        valueOfTimeInBedArray.shift();

        valueOfTimeInBedArray.map(getTime => {
          var msec = getTime;
          var hh = Math.floor(msec / 1000 / 60 / 60);
          msec -= hh * 1000 * 60 * 60;
          var mm = Math.floor(msec / 1000 / 60);
          msec -= mm * 1000 * 60;
          var ss = Math.floor(msec / 1000);
          msec -= ss * 1000;
          if (hh > 100) {
            finalValueOfTimeInBedArray.push(100);
            finalValueOfTimeInBedArray.shift();
            settimeOnBed(finalValueOfTimeInBedArray);
          } else {
            finalValueOfTimeInBedArray.push(hh);
            finalValueOfTimeInBedArray.shift();
            settimeOnBed(finalValueOfTimeInBedArray);
          }
        });
      }
    });
  }, []);

  // graph data
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        //TODO: working here
        //data: [10, 15, 10, 15, 10, 15, 5],
        data:
          days == true
            ? [wentBed]
            : weeks
            ? wentToBedForDay
            : months
            ? [0, 0, 0, 0, 0, 0, 0]
            : all
            ? [0, 0, 0, 0, 0, 0, 0]
            : null,
        color: (opacity = 1) => `rgba(75, 190, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const data1 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        // data: [10, 15, 10, 15, 10, 15, 5],
        data:
          days == true
            ? [wakeTime]
            : weeks
            ? wakeForDay
            : months
            ? [0, 0, 0, 0, 0, 0, 0]
            : all
            ? [0, 0, 0, 0, 0, 0, 0]
            : null,
        color: (opacity = 1) => `rgba(75, 190, 255, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    decimalPlaces: 0,
    useShadowColorFromDataset: false,
  };
  const chartConfig1 = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    decimalPlaces: 0,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Container backgroundColor="#011244" barStyle="light-content">
      <LinearGradient
        colors={['#011244', '#190937', '#250332']}
        style={styles.linearGradient}>
        <ScrollView style={{flex: 1}}>
          <ResponsiveText style={styles.statistics}>Statistics</ResponsiveText>
          <View style={styles.tabsBtn}>
            <TouchableOpacity
              onPress={() => {
                setdayColor(true);
                setweekColor(false);
                setmonthColor(false);
                setallColor(false);
                setDays(true);
                setWeeks(false);
                setMonths(false), setAll(false);
              }}
              style={daycolor ? styles.buttonColor : styles.daysView}>
              <ResponsiveText style={styles.days}>Days</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setdayColor(false);
                setweekColor(true);
                setmonthColor(false);
                setallColor(false);
                setDays(false);
                setWeeks(true);
                setMonths(false), setAll(false);
              }}
              style={weekcolor ? styles.buttonColor : styles.daysView}>
              <ResponsiveText style={styles.days}>Weeks</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setdayColor(false);
                setweekColor(false);
                setmonthColor(true);
                setallColor(false);
                setDays(false);
                setWeeks(false);
                setMonths(true), setAll(false);
              }}
              style={monthColor ? styles.buttonColor : styles.daysView}>
              <ResponsiveText style={styles.days}>Months</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setdayColor(false);
                setweekColor(false);
                setmonthColor(false);
                setallColor(true);
                setDays(false);
                setWeeks(false);
                setMonths(false), setAll(true);
              }}
              style={allColor ? styles.buttonColor : styles.daysView}>
              <ResponsiveText style={styles.days}>All</ResponsiveText>
            </TouchableOpacity>
          </View>

          {/* Start Vertival Graph */}

          <ResponsiveText style={styles.quality}>Sleep Quality</ResponsiveText>

          <VerticalBarGraph
            //data={[40, 45, 28, 80, 99, 43, 50]}
            data={
              days == true
                ? [sleepQ]
                : weeks
                ? timeOnbed1
                : months
                ? [1, 0, 0, 0, 0, 0, 1]
                : all
                ? [2, 2, 2, 2, 2, 2, 2]
                : null
            }
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            width={wp(100)}
            height={hp(35)}
            barRadius={5}
            barColor={'#70F17D'}
            barWidthPercentage={0.06}
            baseConfig={{
              hasXAxisBackgroundLines: false,
              hasXAxisLabels: true,
              xAxisLabelStyle: {
                position: 'left',
                prefix: '  ',
                color: '#fff',
              },
              yAxisLabelStyle: {
                color: '#fff',
              },
            }}
            style={{
              paddingVertical: 10,
            }}
          />
          {/* TODO: graph chage here */}
          {/* End Vertival Graph */}

          {/* went to bed graph */}
          <ResponsiveText style={styles.wentobed}>Went to bed</ResponsiveText>
          <View style={styles.bedView}>
            <LineChart
              data={data}
              width={wp(100)}
              height={160}
              yAxisSuffix=" 'O C"
              withVerticalLines={false}
              withHorizontalLines={false}
              chartConfig={chartConfig}
            />
          </View>
          {/* End of went to bed graph */}

          <ResponsiveText style={styles.wokeTime}>Woke up time</ResponsiveText>
          <View style={styles.wokeTimeView}>
            <LineChart
              data={data1}
              yAxisSuffix=" 'O C"
              width={wp(100)}
              height={160}
              withVerticalLines={false}
              withHorizontalLines={false}
              chartConfig={chartConfig1}
            />
          </View>

          {/* Time in bed */}
          <View style={{marginTop: hp(5)}}>
            <ResponsiveText style={styles.wokeTime}>Time in bed</ResponsiveText>
            <VerticalBarGraph
              //data={[40, 45, 28, 80, 99, 43, 50]}
              data={
                days
                  ? [bedTime]
                  : weeks
                  ? timeOnbed3
                  : months
                  ? [1, 0, 0, 0, 0, 0, 1]
                  : all
                  ? [2, 2, 2, 2, 2, 2, 2]
                  : null
              }
              labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              width={wp(100)}
              height={hp(35)}
              barRadius={5}
              barColor={'#70F17D'}
              barWidthPercentage={0.06}
              baseConfig={{
                hasXAxisBackgroundLines: false,
                hasXAxisLabels: true,
                xAxisLabelStyle: {
                  position: 'left',
                  prefix: '  ',
                  color: '#fff',
                },
                yAxisLabelStyle: {
                  color: '#fff',
                },
              }}
              style={{
                paddingVertical: 10,
              }}
            />
          </View>
          <ResponsiveText style={styles.snore}>Snore</ResponsiveText>

          <VerticalBarGraph
            //data={[40, 45, 28, 80, 99, 43, 50]}
            data={
              days
                ? [snoreValue]
                : weeks
                ? timeOnbed2 //showSnore
                : months
                ? [1, 1, 1]
                : all
                ? [1, 1, 1]
                : null
            }
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            width={wp(100)}
            height={hp(35)}
            barRadius={5}
            barColor={'#FFC447'}
            barWidthPercentage={0.06}
            baseConfig={{
              hasXAxisBackgroundLines: false,
              hasXAxisLabels: true,
              xAxisLabelStyle: {
                position: 'left',
                prefix: '  ',
                color: '#fff',
              },
              yAxisLabelStyle: {
                color: '#fff',
              },
            }}
            style={{
              paddingVertical: 10,
            }}
          />
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default index;
