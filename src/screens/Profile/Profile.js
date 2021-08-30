import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {getColorByLetter} from '../../utills';
import {styles} from './Profile.style';

export default function Profile({navigation, route}) {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    getContact(route.params.contactInfo.id);
  }, [route.params.contactInfo.id]);

  function getContact(id) {
    Contacts.getContactById(id)
      .then(contact => {
        setContactInfo({
          ...contact,
          color: getColorByLetter(contact.givenName[0]),
        });
      })
      .catch(error => console.log(error));
  }

  if (!contactInfo) {
    return <ActivityIndicator size={32} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: contactInfo.hasThumbnail ? contactInfo.thumbNailpath : null,
        }}
        style={{...styles.backgroundImage, backgroundColor: contactInfo.color}}>
        <Text style={styles.mainText}>{contactInfo.givenName}</Text>
      </ImageBackground>
      <View style={{flex: 1, marginTop: 20}}>
        <View style={styles.phonenNumberContainer}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            {contactInfo && contactInfo.phoneNumbers[0].number}
          </Text>
        </View>
        <View style={styles.phonenNumberContainer}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            {contactInfo && contactInfo.emailAddresses[0].email}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.editView}
        onPress={() =>
          navigation.navigate('CreateContact', {
            contactInfo: contactInfo,
          })
        }>
        <Text style={{color: ColourPalette.blue, fontSize: 20}}>{'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
}
