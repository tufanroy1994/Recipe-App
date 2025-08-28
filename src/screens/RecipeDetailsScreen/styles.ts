import { StyleSheet } from 'react-native';
import { AppColors, FontSizes, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(8),
  },
  arrow: {
    height: wp(12),
    width: wp(12),
  },
  headerText: {
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_30,
    textShadowColor: AppColors.GREEN,
    textShadowOffset: { width: -1, height: -3 },
    textShadowRadius: 10,
    textDecorationLine: 'underline',
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: wp(60),
    width: wp(95),
    borderRadius: wp(3),
  },
  titleBox: {
    paddingTop: wp(4),
    paddingHorizontal: wp(27),
  },
  name: {
    textAlign: 'center',
    color: AppColors.ORANGE,
  },
  origin: {
    textAlign: 'center',
    color: AppColors.PRIMARY_TEXT,
  },
  category: {
    color: AppColors.BLUE,
    textAlign: 'center',
  },
  instruction: {
    color: AppColors.GREEN,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_14,
  },
  video: {
    color: AppColors.BLUE,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_14,
  },
  source: {
    color: AppColors.MAROON,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_14,
  },
  titleBox1: {
    paddingTop: wp(4),
    paddingHorizontal: wp(15),
  },
  ingredientContainer: {
    marginTop: wp(3),
    borderWidth: 1,
    borderColor: AppColors.PRIMARY_TEXT,
    borderRadius: wp(2),
    overflow: 'hidden',
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: AppColors.YELLOW,
    paddingVertical: wp(2),
    paddingHorizontal: wp(3),
  },

  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: FontSizes.FONT_SIZE_18,
    textAlign: 'center',
  },

  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: AppColors.PRIMARY_TEXT,
    paddingVertical: wp(2),
    paddingHorizontal: wp(3),
  },

  tableCell: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_18,
    textAlign: 'center',
    color: AppColors.PEACH,
  },
});
