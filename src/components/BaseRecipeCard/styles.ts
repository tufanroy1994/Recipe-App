import { StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, wp } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingTop: wp(2),
    paddingBottom: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: AppColors.CARD_BACKGROUND,
    borderRadius: wp(2),
  },
  imageContainer: {
    marginBottom: wp(1),
    marginTop: wp(1),
  },
  image: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(1),
  },
  textBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_18,
    fontFamily: FontFamily.Pacifico_Regular,
  },
  area: {
    color: AppColors.PRIMARY_TEXT,
    fontSize: FontSizes.FONT_SIZE_18,
    fontFamily: FontFamily.Pacifico_Regular,
  },
});
