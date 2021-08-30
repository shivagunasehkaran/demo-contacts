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
import MyContacts from './screens/MyContacts/MyContacts';
import CreateContact from './screens/CreateContact/CreateContact';
import Profile from './screens/Profile/Profile';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyContacts">
        <Stack.Screen name="MyContacts" component={MyContacts} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
