import {actions} from './actions';

const initialState = {
  collections: [],
  favorites: {},
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case actions.SAVE_TO_COLLECTION: {
      return {...state, collections: action.payload};
    }
    case actions.SAVE_MORE_TO_COLLECTION: {
      const temp = state.collections.slice();
      temp.push(...action.payload);

      return {...state, collections: temp};
    }
    case actions.ADD_FAVORITE: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: action.payload.data,
        },
      };
    }
    case actions.REMOVE_FAVORITE: {
      const temp = {...state.favorites};
      delete temp[action.payload];

      return {
        ...state,
        favorites: {
          ...temp,
        },
      };
    }
    case actions.SAVE_FAVORITES: {
      return {...state, favorites: action.payload};
    }
    default:
      throw new Error();
  }
}

export {reducer, initialState};
