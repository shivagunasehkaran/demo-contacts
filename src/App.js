/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {Node} from 'react';
import React from 'react';
import MyContacts from './screens/MyContacts';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyContacts">
        <Stack.Screen name="MyContacts" component={MyContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
