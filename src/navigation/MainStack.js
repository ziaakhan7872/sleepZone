import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import splash from '../screens/splash';
import intro1 from '../screens/intro1';
import intro2 from '../screens/intro2';
import privacy from '../screens/privacy';
import sleep from '../screens/sleep';
import journal from '../screens/journal';
import stats from '../screens/stats';
import profile from '../screens/profile';
import sounds from '../screens/sounds';
import wakeupPhase from '../screens/wakeupPhase';
import help from '../screens/help';
import textScreen from '../screens/textScreen';
import music from '../screens/music';

import {Icon} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="sleep"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#24114B',
          height: 60,

          borderTopLeftRadius: 20,
          borderTopEndRadius: 20,
          position: 'absolute',
          borderTopWidth: 0,
        },
        showLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="sleep"
        component={sleep}
        options={{
          tabBarActiveTintColor: '#FF9D55',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Sleep',

          tabBarIcon: ({color}) => <Icon.sleep size={26} />,
        }}
      />
      <Tab.Screen
        name="journal"
        component={journal}
        options={{
          tabBarActiveTintColor: '#FF9D55',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Journal',
          tabBarIcon: ({color}) => <Icon.journal size={26} />,
        }}
      />
      <Tab.Screen
        name="stats"
        component={stats}
        options={{
          tabBarActiveTintColor: '#FF9D55',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Stats',
          tabBarIcon: ({color}) => <Icon.stats size={26} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarActiveTintColor: '#FF9D55',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon.profile size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={splash} />
      <Stack.Screen name="intro1" component={intro1} />
      <Stack.Screen name="intro2" component={intro2} />
      <Stack.Screen name="privacy" component={privacy} />
      <Stack.Screen name="sounds" component={sounds} />
      <Stack.Screen name="wakeupPhase" component={wakeupPhase} />
      <Stack.Screen name="help" component={help} />
      <Stack.Screen name="textScreen" component={textScreen} />
      <Stack.Screen name="music" component={music} />
      <Stack.Screen name="Dashboard" component={DashboardTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
