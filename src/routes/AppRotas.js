import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutorRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          height: 50,
        },
      }}>
        <Tab.Screen
          name='Home'
          component={ProdutorRotas}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home" size={22} color="black" />
            )
          }}
        />
        <Tab.Screen
          name='Melhores Produtores'
          component={MelhoresProdutoresRotas}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="favorite" size={22} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
