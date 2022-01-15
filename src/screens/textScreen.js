import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import {LineChart} from 'react-native-chart-kit';

const textScreen = () => {
  const [state, setstate] = useState([]);
  const [graphData, setgraphData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const startSnoring = () => {
    RNSoundLevel.start();
    RNSoundLevel.onNewFrame = data => {
      console.log('Sound level info', data);
      let aaa = data.value + 160;
      // setgraphData(aaa);
      array.shift();

      array.push(aaa);
      setgraphData([...array]);
    };
  };

  const stopSnoring = () => {
    RNSoundLevel.stop();
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 100,
        }}>
        <Text
          onPress={() => startSnoring()}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'red',
            color: '#fff',
          }}>
          Start snoring
        </Text>
        <Text
          onPress={() => stopSnoring()}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'red',
            color: '#fff',
            alignSelf: 'center',
          }}>
          Stop snoring
        </Text>
      </View>
      <LineChart
        data={{
          labels: graphData,
          datasets: [
            {
              data: graphData,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default textScreen;
