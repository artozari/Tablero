import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const PolygonExample = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg height="200" width="200">
        <Polygon
          points="50,0 100,50 50,100 0,50"
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
};

export default PolygonExample;
