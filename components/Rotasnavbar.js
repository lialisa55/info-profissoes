import React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import JuniorTi from './JuniorTi';
import PlenoTi from './PlenoTi';
import SeniorTi from './SeniorTi';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator initialRouteName="JuniorTi" screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="Junior"
        component={JuniorTi}
          options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="codesquareo" size={24} color={"black"} />
          ),
        }}
      />
            <Tab.Screen
        name="Pleno"
        component={PlenoTi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="codesquareo" size={24} color="black" />
          ),
        }}
      />
            <Tab.Screen
        name="Senior"
        component={SeniorTi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="codesquareo" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
