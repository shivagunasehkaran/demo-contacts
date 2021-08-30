import {StyleSheet, Dimensions} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 30,
    color: ColourPalette.white,
    fontWeight: 'bold',
  },
  phonenNumberContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    elevation: 5,
    paddingVertical: 20,
    backgroundColor: ColourPalette.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editView: {
    marginHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: ColourPalette.white,
  },
});
