import { Platform, StyleSheet } from 'react-native';
import { wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(12),
    paddingTop: Platform.OS === 'ios' ? wp(130) : wp(125),
  },
});
