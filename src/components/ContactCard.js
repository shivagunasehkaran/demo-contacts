import React from 'react';
import {Text, View} from 'react-native';
import {getColorByLetter} from '../utills/index';
import {styles} from './ContactCard.style';

const ContactsCard = props => {
  let contactInfo = props.contactInfo ? props.contactInfo : null;
  const color = getColorByLetter(contactInfo.familyName[0]);
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={{...styles.icon, backgroundColor: color}}>
          <Text style={styles.iconContent}>{contactInfo.familyName[0]}</Text>
        </View>
        <Text style={styles.primaryText}>{contactInfo.familyName}</Text>
      </View>
    </View>
  );
};

export default ContactsCard;
