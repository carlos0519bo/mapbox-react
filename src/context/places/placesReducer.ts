import { Feature } from '../../interfaces';
import { PlacesState } from './PlacesProvider';

type PlacesActions =
  | {
      type: 'setUserLocation';
      payload: [number, number];
    }
  | {
      type: 'setIsLoadingPlaces';
    }
  | {
      type: 'setPlaces';
      payload: Feature[];
    };

export const placesReducer = (
  state: PlacesState,
  action: PlacesActions
): PlacesState => {
  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      };

    case 'setIsLoadingPlaces':
      return {
        ...state,
        isLoadingPlaces: true,
        places: [],
      };

    case 'setPlaces':
      return {
        ...state,
        isLoadingPlaces: false,
        places: action.payload,
      };
    default:
      return state;
  }
};
