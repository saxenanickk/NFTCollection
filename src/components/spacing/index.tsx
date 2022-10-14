import {View} from 'react-native';
import React, {FC} from 'react';
import {hScale, wScale} from '../../utils';

interface Props {
  size?: number;
  direction?: 'horizontal' | 'vertical';
}

const Spacing: FC<Props> = ({size = 10, direction = 'vertical'}) => {
  if (direction === 'horizontal') {
    return <View style={{marginLeft: wScale(size)}} />;
  }
  return <View style={{marginTop: hScale(size)}} />;
};

export {Spacing};
