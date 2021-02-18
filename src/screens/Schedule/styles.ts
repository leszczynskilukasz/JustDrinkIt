import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 30,
    color: '#1E90FF',
  },
  card: {
    width: wp('70%'),
    height: hp('10%') < 100 ? 100 : hp('100%'),
  },
});

export default styles;
