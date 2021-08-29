import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './MyContacts.style';

const MyContacts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{'Hello contacts'}</Text>
    </View>
  );
};

export default MyContacts;
