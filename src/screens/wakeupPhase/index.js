import React from 'react';
import styles from './styles';
import {View, ScrollView} from 'react-native';
import {Container, Icon, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import RadioButtonRN from 'radio-buttons-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {wakeup} from '../../redux/actions/userdataAction';
import {useSelector, useDispatch} from 'react-redux';
import {AdMobBanner} from 'react-native-admob';

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const getTime = useSelector(state => state.userdataReducer.wakeUpPhase);
  console.log('getTime', getTime.initialState);

  const Sound = [
    {
      label: '10 minutes',
    },
    {
      label: '15 minutes',
    },
    {
      label: '20 minutes',
    },
    {
      label: '30 minutes',
    },
    {
      label: '40 minutes',
    },
  ];

  const timeInterval = e => {
    if (e.label == '10 minutes') {
      let objwakePhase = {
        timeInterval: 10,
        initialState: 1,
      };
      dispatch(wakeup(objwakePhase));
    } else if (e.label == '15 minutes') {
      let objwakePhase = {
        timeInterval: 15,
        initialState: 2,
      };
      dispatch(wakeup(objwakePhase));
    } else if (e.label == '20 minutes') {
      let objwakePhase = {
        timeInterval: 20,
        initialState: 3,
      };
      dispatch(wakeup(objwakePhase));
    } else if (e.label == '30 minutes') {
      let objwakePhase = {
        timeInterval: 30,
        initialState: 4,
      };
      dispatch(wakeup(objwakePhase));
    } else if (e.label == '40 minutes') {
      let objwakePhase = {
        timeInterval: 40,
        initialState: 5,
      };
      dispatch(wakeup(objwakePhase));
    }
  };
  return (
    <Container>
      <LinearGradient
        colors={['#011244', '#190937', '#250332']}
        style={styles.linearGradient}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon.leftArrow size={25} />
          </TouchableOpacity>
          <ResponsiveText style={styles.sounds}>Wake up phase</ResponsiveText>
        </View>
        <ScrollView style={{flex: 1}}>
          {/* Alarm Sound */}
          <View style={styles.mainView}>
            <RadioButtonRN
              style={styles.radioBtn}
              //box={false}
              initial={getTime.initialState == null ? 1 : getTime.initialState}
              circleSize={20}
              textColor={'#fff'}
              activeColor={'#2A6DC0'}
              data={Sound}
              boxActiveBgColor={'#011244'}
              boxDeactiveBgColor={'#011244'}
              selectedBtn={e => timeInterval(e)}
            />
          </View>
          <View style={styles.horizentolLine} />
          {/* end of Alarm Sound */}
          <View style={styles.textView}>
            <ResponsiveText style={styles.text}>
              Sleep zone will wake you up within the time frame you set,with
              your defined alaram time. Our favorite is the 30 minutes window
              that one gives you sample time to reach your lightest sleep phase
              and wake up fresh and rested.
            </ResponsiveText>
          </View>
        </ScrollView>
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
        />
      </LinearGradient>
    </Container>
  );
};

export default index;
