import { StyleSheet } from 'react-native';
import { AppColors, FontSizes, wp } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: AppColors.PRIMARY_TEXT,
    borderWidth: wp(0.1),
    borderRadius: wp(2),
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_18,
  },
});
