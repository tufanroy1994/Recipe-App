import React, { memo } from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { AppColors } from '../../utils';
import { styles } from './styles';

interface BaseFormInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: ViewStyle;
}

const BaseFormInput = ({
  containerStyle,
  inputContainerStyle,
  ...props
}: BaseFormInputProps & TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        <TextInput
          placeholderTextColor={AppColors.PRIMARY_TEXT}
          {...props}
          style={[styles.inputStyle, props.style]}
        />
      </View>
    </View>
  );
};

export default memo(BaseFormInput);
