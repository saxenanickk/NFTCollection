import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {hScale, wScale} from '../../utils';
import NFTCard from '../../components/nftCard';
import {styles} from './styles';
import {EmptyView} from '../../components/emptyView';
import {NFTContext} from '../../data/nftContext';
import {actions} from '../../data/actions';
import {getCollection} from '../../network/getCollection';

const ItemSeparatorComponent: FC = () => <View style={{height: hScale(10)}} />;

const Collection = () => {
  const {
    state: {collections, favorites},
    dispatch,
  }: any = useContext(NFTContext);

  const pageRef = useRef(1);
  const totalPagesRef = useRef(1);

  const onPressFavorite = (id: string, data: any = {}) => {
    if (favorites[id] !== undefined) {
      dispatch({type: actions.REMOVE_FAVORITE, payload: id});
    } else {
      dispatch({type: actions.ADD_FAVORITE, payload: {id, data}});
    }
  };

  const fetchCollections = () => {
    if (totalPagesRef.current >= pageRef.current) {
      getCollection({page: pageRef?.current})
        .then((res: any) => {
          totalPagesRef.current = res.pages;

          if (pageRef?.current > 1) {
            dispatch({
              type: actions.SAVE_MORE_TO_COLLECTION,
              payload: res?.data,
            });
          } else {
            dispatch({type: actions.SAVE_TO_COLLECTION, payload: res?.data});
          }
          pageRef.current = pageRef?.current + 1;
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useState(true);
  const renderItem: any = ({item}: {item: any}) => (
    <NFTCard
      img={item?.img}
      name={item?.name}
      description={item?.description}
      address={item?.address}
      tokenId={item?.id}
      onPressFavorite={onPressFavorite}
      isFavorite={favorites[item?.id] !== undefined}
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
        keyExtractor={(item: any) => item?.id?.toString()}
        onEndReached={fetchCollections}
      />
    </View>
  );
};

export {Collection};
