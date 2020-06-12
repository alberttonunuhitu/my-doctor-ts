import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconMessage,
  IconHospitals,
  IconDoctorActive,
  IconMessageActive,
  IconHospitalsActive,
} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface TabItemComponentProps {
  label: any;
  isActive: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

const TabItemComponent: React.FC<TabItemComponentProps> = ({
  label,
  isActive,
  onPress,
  onLongPress,
}) => {
  const Icon = () => {
    switch (label) {
      case 'Doctor':
        return isActive ? <IconDoctorActive /> : <IconDoctor />;
      case 'Message':
        return isActive ? <IconMessageActive /> : <IconMessage />;
      case 'Hospitals':
        return isActive ? <IconHospitalsActive /> : <IconHospitals />;
      default:
        return <IconDoctor />;
    }
  };

  const fontColor = isActive ? colors.text.active : colors.text.inactive;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text
        style={[
          styles.text,
          {
            color: fontColor,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItemComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 10,
    marginTop: 4,
  },
});
