import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  image: {
    width: '100%',
    height: deviceSize.height / 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  inner_container: {
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    top: 170,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor: '#000000a0',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
    marginBottom: 5,
  },
});
