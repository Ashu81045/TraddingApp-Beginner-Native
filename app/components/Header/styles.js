import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 15,
    minHeight: 40,
  },
  headerText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
  },
  customStyles: {
    textAlign: 'center',
  },
  componentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textContainer: {
    marginLeft: 10,
  },
  logo: {
    alignItems: 'center',
  },
});

export default styles;
