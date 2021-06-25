import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#eceff1',
    margin: 5,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  inner_container: {justifyContent: 'center'},
  title: {fontSize: 20, margin: 10},
  image: {
    borderRadius: 50,
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
});
