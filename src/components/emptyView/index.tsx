import React, {FC} from 'react';
import {strings} from '../../data/strings/en';
import {hScale} from '../../utils';
import {Colors} from '../../utils';
import {NFTText} from '../nftText';

const EmptyView: FC = () => (
  <NFTText color={Colors.BLACK} weight={'500'} size={hScale(16)}>
    {strings.no_nfts_found}
  </NFTText>
);

export {EmptyView};
