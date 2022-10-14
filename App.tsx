import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteIcon} from './src/components/favoriteIcon';
import {HomeIcon} from './src/components/homeIcon';
import {Collection} from './src/screens/collection';
import {Favorites} from './src/screens/favorites';
import {initialState, reducer} from './src/data/reducer';
import {NFTContext} from './src/data/nftContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {actions} from './src/data/actions';

const Tab = createBottomTabNavigator();

const ScreenOptions = ({route}: {route: any}) => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: any;
    size: any;
  }) => {
    if (route.name === 'Collection') {
      return <HomeIcon focused={focused} size={size} color={color} />;
    } else if (route.name === 'Favorites') {
      return <FavoriteIcon focused={focused} size={size} color={color} />;
    }

    return null;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    AsyncStorage.getItem('@nftapp:favorites')
      .then(res => {
        if (res) {
          const data = JSON.parse(res);
          dispatch({type: actions.SAVE_FAVORITES, payload: data});
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@nftapp:favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <SafeAreaView style={styles.container}>
      <NFTContext.Provider value={{state, dispatch}}>
        <NavigationContainer>
          <StatusBar barStyle={'dark-content'} />
          <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen name="Collection" component={Collection} />
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
      </NFTContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
