import { StyleSheet, Dimensions } from 'react-native';
import { wp } from '../../utils';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waveContainer: {
    position: 'absolute',
    width: width, // Use full screen width
    backgroundColor: 'transparent',
  },
  waveSvg: {
    position: 'absolute',
    top: 0,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(12),
  },
  image: {
    width: wp(80),
    height: wp(80),
    paddingTop: wp(2),
    borderRadius: wp(15),
  },
});
