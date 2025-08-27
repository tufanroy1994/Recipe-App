import React, { memo } from 'react';
import { View, ViewProps } from 'react-native';

import { styles } from './styles';

const BaseSeperator = (props: ViewProps) => {
  return <View {...props} style={[styles.seperator, props.style]} />;
};

export default memo(BaseSeperator);
