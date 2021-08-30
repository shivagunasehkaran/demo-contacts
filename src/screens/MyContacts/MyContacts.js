import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import ContactCard from '../../components/ContactCard';
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
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.flatListView}>
          <FlatList
            data={myContacts}
            keyExtractor={item => item.recordID}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => console.log('sdfsdf')}>
                <ContactCard contactInfo={item} />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              position: 'absolute',
              bottom: 10,
              right: 10,
              height: 70,
              backgroundColor: '#32FFCC',
              borderRadius: 100,
            }}
            onPress={() => navigation.navigate('CreateContact')}>
            <Text style={{fontSize: 20}}>{'+'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
