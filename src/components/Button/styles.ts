import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    width: wp('50%'),
    height: hp('7%'),
    borderRadius: 10,
    borderWidth: 3,
    margin: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1E90FF',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
  },
});

export default styles;
