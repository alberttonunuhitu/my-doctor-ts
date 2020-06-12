import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILCatUmum, ILCatPsikiater, ILCatObat} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface DoctorCategoryComponentProps {
  label: string;
  onPress: () => void;
}

const DoctorCategoryComponent: React.FC<DoctorCategoryComponentProps> = ({
  label,
  onPress,
}) => {
  const Icon = () => {
    switch (label) {
      case 'dokter umum':
        return <ILCatUmum style={styles.illustration} />;
      case 'psikiater':
        return <ILCatPsikiater style={styles.illustration} />;
      case 'dokter obat':
        return <ILCatObat style={styles.illustration} />;
      default:
        return <ILCatUmum style={styles.illustration} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={[{fontFamily: fonts.primary[300]}, styles.text]}>
        Saya butuh
      </Text>
      <Text style={[{fontFamily: fonts.primary[600]}, styles.text]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DoctorCategoryComponent;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.card.primary,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  text: {
    fontSize: 12,
    color: colors.text.primary,
  },
});
