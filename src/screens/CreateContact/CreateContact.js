import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import Contacts from 'react-native-contacts';
import {styles} from './CreateContact.style';

export default function CreateContact({navigation, route}) {
  const existingData = route.params && route.params.contactInfo;

  const [name, setName] = useState(
    existingData !== undefined ? existingData.givenName : '',
  );
  const [email, setEmail] = useState(
    existingData && existingData.emailAddresses[0] !== undefined
      ? existingData.emailAddresses[0].email
      : '',
  );
  const [phoneNumber, setPhoneNumber] = useState(
    existingData && existingData.phoneNumbers[0] !== undefined
      ? existingData.phoneNumbers[0].number
      : '',
  );

  // manage contacts for both add and existing contact
  function manageContacts() {
    if (!name && !email && !phoneNumber) {
      Alert.alert('Something went wrong', 'Please fill the all fields');
      return;
    }
    const myPhonenumber = [{label: 'phone', number: phoneNumber}];

    const myEmail = [{label: 'email', email: email}];

    // do add and existing contact based on existingData
    if (existingData === undefined) {
      const contactInfo = {
        givenName: name,
        emailAddresses: myEmail,
        phoneNumbers: myPhonenumber,
      };
      // addContact api
      Contacts.addContact(contactInfo)
        .then(() => navigation.navigate('MyContacts'))
        .catch(error => console.log(error));
    } else {
      const contactInfo = {
        recordID: existingData.recordID,
        givenName: name,
        emailAddresses: myEmail,
        phoneNumbers: myPhonenumber,
      };

      // editExistingContact api
      Contacts.editExistingContact(contactInfo)
        .then(() => navigation.navigate('MyContacts'))
        .catch(error => console.log(error));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>

      <Button title="Save" onPress={() => manageContacts()} />
    </View>
  );
}
