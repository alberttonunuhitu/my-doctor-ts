import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';

interface IconOnlyProps {
  icon?: string;
  onPress: () => void;
}

const IconOnly: React.FC<IconOnlyProps> = ({icon, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'back-dark':
        return <IconBackDark />;
      case 'back-light':
        return <IconBackLight />;
      default:
        return <IconBackDark />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
