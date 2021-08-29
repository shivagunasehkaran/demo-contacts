/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>{'Hello world'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
