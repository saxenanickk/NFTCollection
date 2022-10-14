import {View, FlatList} from 'react-native';
import React, {FC, useContext} from 'react';
import {hScale, wScale} from '../../utils';
import NFTCard from '../../components/nftCard';
import {EmptyView} from '../../components/emptyView';
import {styles} from './styles';
import {NFTContext} from '../../data/nftContext';
import {actions} from '../../data/actions';
import {strings} from '../../data/strings/en';

const ItemSeparatorComponent: FC = () => <View style={{height: hScale(10)}} />;

const Favorites = () => {
  const {
    state: {favorites},
    dispatch,
  }: any = useContext(NFTContext);

  const onPressFavorite = (id: string, data: any = {}) => {
    if (favorites[id] !== undefined) {
      dispatch({type: actions.REMOVE_FAVORITE, payload: id});
    } else {
      dispatch({type: actions.ADD_FAVORITE, payload: {id, data}});
    }
  };

  const renderItem: any = ({item}: {item: any}) => (
    <NFTCard
      img={item?.img}
      name={item?.name}
      description={item?.description}
      address={item?.address}
      tokenId={item?.id}
      onPressFavorite={onPressFavorite}
      isFavorite
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{padding: wScale(10)}}
        ListEmptyComponent={<EmptyView msg={strings.no_favorites} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Object.values(favorites)}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.id?.toString()}
      />
    </View>
  );
};

export {Favorites};
