import { StyleSheet } from 'react-native';
import { AppColors, wp } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(2),
    borderColor: AppColors.PRIMARY_TEXT,
    borderWidth: wp(0.5),
    borderRadius: wp(2),
    shadowColor: AppColors.SHADOW,
    elevation: 10,
    opacity: 1,
  },
});
