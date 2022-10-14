import React, {FC} from 'react';
import {strings} from '../../data/strings/en';
import {hScale} from '../../utils';
import {Colors} from '../../utils';
import {NFTText} from '../nftText';

interface Props {
  msg?: string;
}

const EmptyView: FC<Props> = ({msg}) => (
  <NFTText color={Colors.BLACK} weight={'500'} size={hScale(16)}>
    {msg ?? strings.no_nfts_found}
  </NFTText>
);

export {EmptyView};
