import { StyleSheet } from 'react-native';
import { AppColors, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    marginTop: wp(5),
    marginBottom: wp(3),
  },
  inputContainerStyle: {
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    backgroundColor: AppColors.INPUT_BOX,
  },
  inputStyle: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_18,
    color: AppColors.PRIMARY_BACKGROUND,
    padding: 0,
    paddingVertical: hp(1.7),
  },
});
