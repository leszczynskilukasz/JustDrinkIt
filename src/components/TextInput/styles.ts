import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 20,
    width: wp('85%'),
    height: hp('7%'),
    color: '#000000',
    fontSize: 17,
    borderRadius: 10,
    borderColor: '#18B0B0',
    borderWidth: 2,
    backgroundColor: 'transparent',
    margin: 15,
  },
});

export default styles;
