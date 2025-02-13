import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityInfo from './CityInfo';

const Tab = createBottomTabNavigator();

const WelcomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Calgary" 
        component={() => <CityInfo city="Calgary" link="https://www.calgary.ca/home.html" />} 
      />
      <Tab.Screen 
        name="Edmonton" 
        component={() => <CityInfo city="Edmonton" link="https://www.edmonton.ca/" />} 
      />
    </Tab.Navigator>
  );
};

export default WelcomeScreen;
