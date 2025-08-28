import React, { memo } from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';

import BaseText from '../BaseText';
import { styles } from './styles';

interface BaseTabPropsType {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: TextStyle;
}

const BaseTab = ({ containerStyle, title, titleStyle }: BaseTabPropsType) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BaseText style={[styles.title, titleStyle]}>{title}</BaseText>
    </View>
  );
};

export default memo(BaseTab);
