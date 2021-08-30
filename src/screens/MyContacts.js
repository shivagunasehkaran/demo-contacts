import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Platform, TouchableOpacity, View} from 'react-native';
import Contacts from 'react-native-contacts';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import ContactCard from '../components/ContactCard';
import {styles} from './MyContacts.style';

export default function MyContacts({navigation}) {
  const isFocused = useIsFocused();

  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, [isFocused]);

  async function getAllContacts() {
    try {
      const result = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.READ_CONTACTS,
          ios: PERMISSIONS.IOS.CONTACTS,
        }),
      );
      if (result === RESULTS.GRANTED) {
        const contacts = await Contacts.getAll();
        setMyContacts(contacts);
      } else {
        return false;
      }
    } catch (err) {
      console.log(error);
    }
  }

  return (
    <View style={styles.styles}>
      <FlatList
        data={myContacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => console.log('sdfsdf')}>
            <ContactCard contactInfo={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
