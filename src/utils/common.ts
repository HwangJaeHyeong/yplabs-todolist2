import {Dimensions} from 'react-native';

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
