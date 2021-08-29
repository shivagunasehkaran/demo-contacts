import {StyleSheet} from 'react-native';
import {ColourPalette} from '../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  addIcon: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  },
});
