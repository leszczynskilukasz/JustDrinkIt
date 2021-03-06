import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: wp('17%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: hp('10%'),
    color: '#1E90FF',
  },
  textError: {
    color: '#FF0000',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
