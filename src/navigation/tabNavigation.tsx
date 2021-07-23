import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import Icons from 'react-native-vector-icons/AntDesign';
import {StackProfileNavigation} from './stackProfileNavigation';

export const TabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const tabNavigationActive = (
    focused: boolean,
    color: string,
    size: number,
    name: string,
  ) => {
    let iconName;
    if (name === 'Home') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      return <Icons name="home" size={size} color={color} />;
    } else if (name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
      return <Icons name="setting" size={size} color={color} />;
    } else if (name === 'Profile') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
      return <Icons name="user" size={size} color={color} />;
    } else {
      return <Icons name="tags" size={size} color={color} />;
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return tabNavigationActive(focused, color, size, route.name);
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Profile" component={StackProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
