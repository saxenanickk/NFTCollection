import {View} from 'react-native';
import {hScale, wScale} from '../../utils';
import {strings} from '../../data/strings/en';
import {Colors} from '../../utils';
import {NFTText} from '../nftText';
import React, {FC} from 'react';

const ErrorView: FC = () => (
  <View style={{paddingHorizontal: wScale(20)}}>
    <NFTText color={Colors.RED} weight={'bold'} size={hScale(16)}>
      {strings.error_occured}
    </NFTText>
  </View>
);

export {ErrorView};
