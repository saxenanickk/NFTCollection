import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {FC, useContext, useEffect, useState} from 'react';
import {hScale, wScale} from '../../utils';
import NFTCard from '../../components/nftCard';
import {styles} from './styles';
import {EmptyView} from '../../components/emptyView';
import {NFTContext} from '../../data/nftContext';
import {actions} from '../../data/actions';

const ItemSeparatorComponent: FC = () => <View style={{height: hScale(10)}} />;

const DATA = [
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '1',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/1-the_eth_saint.png',
    name: 'Rockstars of EPNS V2 #1',
    description: 'Indian saint medit-ETHing',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '10',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/10-meethai.png',
    name: 'Rockstars of EPNS V2 #10',
    description: 'A bowl of sweet gems for web3 enthusiasts',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '100',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/100-push_chatri.png',
    name: 'Rockstars of EPNS V2 #100',
    description: 'Saving your collection from bad weather',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '11',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/11-etheyyam.png',
    name: 'Rockstars of EPNS V2 #11',
    description:
      'Theyyam is a popular ritual form of dance worship in Kerala and Karnataka',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '12',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/12-kanha.png',
    name: 'Rockstars of EPNS V2 #12',
    description:
      'Baby avtar of Lord Krishna enjoying his favourite meal (Maakhan)',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '13',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/13-vicious_lady_serpent.png',
    name: 'Rockstars of EPNS V2 #13',
    description:
      'Vicious Lady Serpent  on the lookout for her next 100x shitcoin',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '14',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/14-eth_architect.png',
    name: 'Rockstars of EPNS V2 #14',
    description: 'ETH Architect crafting the Ethereum ecosystem',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '15',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/15-rajinikanth.png',
    name: 'Rockstars of EPNS V2 #15',
    description: 'One of the most iconic actors from Tamil Cinema',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '16',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/16-Goddess_mahakali.png',
    name: 'Rockstars of EPNS V2 #16',
    description: 'Avtar of godess mahakali in bangol’s traditional attire',
  },
  {
    collectionName: 'Rockstars of EPNS V2',
    collectionAddress: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8',
    chain: 'ETH',
    network: 'mainnet',
    collectionTokenId: '17',
    imageUrl:
      'https://epns.mypinata.cloud/ipfs/QmVr4bSmoic8AH6Tj2Pm5Tak65tqPBg6WifmkAQAbuPZTP/17-dafli_wala.png',
    name: 'Rockstars of EPNS V2 #17',
    description: 'Dafli wala playing the beats of Ethereum',
  },
];

const Collection = () => {
  const {
    state: {collections, favorites},
    dispatch,
  }: any = useContext(NFTContext);

  const onPressFavorite = (id: string, data: any = {}) => {
    if (favorites[id] !== undefined) {
      dispatch({type: actions.REMOVE_FAVORITE, payload: id});
    } else {
      dispatch({type: actions.ADD_FAVORITE, payload: {id, data}});
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: actions.SAVE_TO_COLLECTION, payload: DATA});
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useState(true);
  const renderItem: any = ({item}: {item: any}) => (
    <NFTCard
      img={item?.imageUrl}
      name={item?.name}
      description={item?.description}
      address={item?.collectionAddress}
      tokenId={item?.collectionTokenId}
      onPressFavorite={onPressFavorite}
      isFavorite={favorites[item?.collectionTokenId] !== undefined}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: wScale(10)}}
        ListEmptyComponent={!loading ? EmptyView : null}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={collections.slice()}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.collectionTokenId?.toString()}
      />
    </View>
  );
};

export {Collection};
