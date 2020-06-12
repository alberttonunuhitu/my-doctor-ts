import React from 'react';
import {View} from 'react-native';

interface SpaceComponentProps {
  width?: number;
  height?: number;
}

const SpaceComponent: React.FC<SpaceComponentProps> = ({
  width = 0,
  height = 0,
}) => <View style={{width: width, height: height}} />;

export default SpaceComponent;
