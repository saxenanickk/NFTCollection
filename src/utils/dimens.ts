import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const wScale = (size: number) => (width / guidelineBaseWidth) * size;
const hScale = (size: number) => (height / guidelineBaseHeight) * size;

export {wScale, hScale};
