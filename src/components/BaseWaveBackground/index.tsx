import React, { memo } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { AppImages } from '../../utils';
import { styles } from './styles';

const { width, height } = Dimensions.get('window'); // Get width and height of the screen

const BaseWaveBackground = () => {
  const waveHeight = height * 0.9; // Dynamically calculate wave height (25% of screen height)

  return (
    <View style={styles.container}>
      <View style={[styles.waveContainer, { height: waveHeight }]}>
        <Svg
          height={waveHeight} // Adjust height dynamically
          width={width}
          viewBox={`0 0 ${width} ${waveHeight}`}
          style={styles.waveSvg}
        >
          {/* Main wave */}
          <Path
            d={`
              M ${width} 0
              L 0 0
              L 0 ${waveHeight * 0.72}
              C ${width * 0.01} ${waveHeight * 0.5},
                ${width * 0.31} ${waveHeight * 0.59},
                ${width * 0.75} ${waveHeight * 0.57},
              C ${width * 0.99} ${waveHeight * 0.56},
                ${width * 0.999} ${waveHeight * 0.44},
                ${width} ${waveHeight * 0.4}
              L ${width} 0
              Z
            `}
            fill="#E6F3FF"
          />
        </Svg>
      </View>
      {/* Your content goes here */}
      <View style={styles.imageContainer}>
        <Image
          source={AppImages.LOGO}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default memo(BaseWaveBackground);
