import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import BaseText from '../BaseText';
import { styles } from './styles';

interface BaseButtonPropsType {
  title: string;
}

const BaseButtton = ({
  title,
  ...props
}: BaseButtonPropsType & TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <BaseText>{title}</BaseText>
    </TouchableOpacity>
  );
};

export default memo(BaseButtton);
