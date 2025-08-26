import React from 'react';
import { View } from 'react-native';

import { BaseButton, BaseWaveBackground } from '../../components';
import { AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const WelcomeScreen = () => {
  const navigation = useAppNavigation('WelcomeScreen');

  return (
    <View style={[styles.flexContainer]}>
      <BaseWaveBackground />
      <View style={[styles.contentContainer]}>
        <BaseButton
          title={AppStrings.recipes_in_one_click}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
