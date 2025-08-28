import React, { memo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
} from 'react-native';

import { AppStrings } from '../../utils';
import { styles } from './styles';

interface BaseRecipeCardProps {
  recipeImage?: string;
  name?: string;
  area?: string;
  onPress?: () => void;
}

const BaseRecipeCard = ({
  recipeImage,
  name,
  area,
  onPress,
  style,
  ...props
}: BaseRecipeCardProps & TouchableOpacityProps) => (
  <>
    <TouchableOpacity
      {...props}
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.imageContainer]}>
        {recipeImage && (
          <Image
            source={{ uri: recipeImage }}
            style={[styles.image]}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={[styles.textBox]}>
        <Text style={[styles.name]}>
          {AppStrings.name}: {name}
        </Text>
        <Text style={[styles.area]}>
          {AppStrings.area}: {area}
        </Text>
      </View>
    </TouchableOpacity>
  </>
);

export default memo(BaseRecipeCard);
