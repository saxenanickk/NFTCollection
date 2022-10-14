import {View, Pressable} from 'react-native';
import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';
import {Colors, wScale} from '../../utils';
import {NFTText} from '../nftText';
import {FavoriteIcon} from '../favoriteIcon';
import {Spacing} from '../spacing';
import {styles} from './styles';

interface Props {
  img: string;
  name: string;
  description: string;
  address: string;
  tokenId: string;
}

const NFTCard: FC<Props> = ({
  img = '',
  name,
  description,
  address,
  //   tokenId,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={{width: wScale(160), height: wScale(160)}}>
          <FastImage
            resizeMode={'contain'}
            style={styles.img}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.informationContainer}>
            <NFTText weight={'bold'} size={wScale(12)}>
              {name}
            </NFTText>
            <Spacing size={5} />
            <NFTText color={Colors.GREY} size={wScale(10)}>
              {address}
            </NFTText>
            <Spacing size={5} />
            <NFTText
              numberOfLines={2}
              ellipsizeMode={'tail'}
              color={Colors.GREY}
              size={wScale(10)}>
              {description}
            </NFTText>
          </View>
          <Pressable>
            <FavoriteIcon
              focused={false}
              size={wScale(20)}
              color={Colors.GREY}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default React.memo(NFTCard);
