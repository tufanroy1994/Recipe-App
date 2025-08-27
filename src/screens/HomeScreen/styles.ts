import { StyleSheet } from 'react-native';
import { AppColors, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(10),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.SHADOW,
    marginTop: wp(3),
    marginBottom: wp(3),
    marginHorizontal: wp(20),
    borderRadius: wp(4),
  },
  cardContainer: {
    paddingTop: wp(6),
  },
  emptyListContainer: {
    height: hp(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_18,
  },
});
