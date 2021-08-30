import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  inputContainer: {
    padding: 10,
    margin: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: ColourPalette.gray,
    padding: 10,
  },
});
