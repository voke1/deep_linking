/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/screenB';
import ScreenC from './screens/screenC';
import LinkingScreen from './screens/LinkingScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
   return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
}

// const config = {
//   screens: {
//     screenA: 'a',
//     screenB: 'b',
//     screenC: 'c',
//     }
//   }



const config = {
  screens: {
    ScreenA: "a",
    ScreenB: {
      path: "b/:message",
      parse: {
        message: (message) => `${message}`
      }
    },
    ScreenC: "c",
  }
}


export default function App(){
  return (
    <NavigationContainer 
    linking={{  
      prefixes: ['deeplink://app'],
      config
    }}>
      <MyStack/>
    </NavigationContainer>
  )
};
