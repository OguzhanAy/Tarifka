import {StyleSheet, Dimensions} from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  image: {width: device.width, height: device.height / 3},
  border: {borderBottomWidth: 1, borderColor: 'grey', marginHorizontal: 10},
  desc: {margin: 5},
  title: {
    color: '#a52a2a',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  region: {
    color: '#a52a2a',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  button: {backgroundColor: 'red', margin: 5, borderRadius: 10},
  button_text: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
