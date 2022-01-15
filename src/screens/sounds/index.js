import React, {useEffect, useState} from 'react';
import {Container, Icon, ResponsiveText} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {Text, View, ScrollView, Image} from 'react-native';
import Sound from 'react-native-sound';
import {audioList} from '../../components/dummyData';
import {AdMobBanner} from 'react-native-admob';

const index = ({navigation}) => {
  let sound1, sound2, sound3, sound4;

  useEffect(() => {
    Sound.setCategory('Playback', true);
    return () => {
      if (sound1) sound1.release();
      if (sound2) sound2.release();
      if (sound3) sound3.release();
      if (sound4) sound4.release();
    };
  }, []);

  const playSound = (item, index) => {
    if (index == 0) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    }
  };

  const stopSound = (_item, index) => {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    } else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <ResponsiveText style={styles.textStyle}>{item.title}</ResponsiveText>
        <TouchableOpacity onPress={() => playSound(item, index)}>
          <ResponsiveText style={styles.buttonPlay}>Play</ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stopSound(item, index)}>
          <ResponsiveText style={styles.buttonStop}>Stop</ResponsiveText>
        </TouchableOpacity>
      </View>
    );
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
          <ResponsiveText style={styles.sounds}>Sounds</ResponsiveText>
        </View>

        <ScrollView>
          {audioList.map(ItemView)}
          <ResponsiveText style={styles.appMusic}>App Music</ResponsiveText>

          {audioList.map(ItemView)}
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
