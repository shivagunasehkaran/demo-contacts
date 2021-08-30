import {StyleSheet} from 'react-native';
import {ColourPalette} from '../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  primaryText: {
    fontSize: 18,
  },
  iconContent: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 24,
    color: ColourPalette.white,
    marginHorizontal: 10,
  },
  icon: {
    borderRadius: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    padding: 1,
    backgroundColor: ColourPalette.green,
  },
});
