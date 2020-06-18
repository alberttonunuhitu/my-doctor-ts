import AsyncStorage from '@react-native-community/async-storage';

const isJSON = (value: string) => {
  value = typeof value !== 'string' ? JSON.stringify(value) : value;

  try {
    value = JSON.parse(value);
  } catch (error) {
    return false;
  }

  if (typeof value === 'object' && value !== null) {
    return true;
  }

  return false;
};

export const storeData = async (key: string, value: object | string) => {
  try {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return isJSON(value) ? JSON.parse(value) : value;
    }
  } catch (error) {}
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};
