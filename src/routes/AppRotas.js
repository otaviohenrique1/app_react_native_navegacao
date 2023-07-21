import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='MelhoresProdutores' component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
