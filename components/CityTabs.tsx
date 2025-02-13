import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityInfo from './CityInfo';

const Tab = createBottomTabNavigator();

const CityTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#007BFF' }}>
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

export default CityTabs;