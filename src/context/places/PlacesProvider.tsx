import { useEffect, useReducer } from 'react';
import { PlacesContext } from './placesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../api';
import { Feature, SearchResponse } from '../../interfaces';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((longitudeLatitude) => {
      const [longitude, latitude] = longitudeLatitude;
      dispatch({ type: 'setUserLocation', payload: [latitude, longitude] });
    });
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error('No hay ubicación del usuario');

    dispatch({ type: 'setIsLoadingPlaces' });

    const resp = await searchApi.get<SearchResponse>(`${query}`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
