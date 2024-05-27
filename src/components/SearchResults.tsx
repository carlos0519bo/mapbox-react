import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activePlaceiD, setActivePlaceiD] = useState('');

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates;
    setActivePlaceiD(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.geometry.coordinates;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  return (
    <div className={!places.length ? 'hidden' : ''}>
      <ul className="w-full mt-1 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-2xl">
        {places.map((place) => (
          <li
            className={`w-full px-4 py-2 border-gray-200 rounded-t-lg dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer ${
              activePlaceiD === place.id ? 'bg-gray-50 dark:bg-gray-600' : ''
            }`}
            key={place.id}
            onClick={() => onPlaceClick(place)}
          >
            <h6>{place.properties.name}</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {place.properties.place_formatted}
            </p>
            <div className="flex justify-end mt-2">
              <button
                className={`bg-[#00D8FF] hover:bg-sky-700 p-2 rounded-xl text-zinc-600 hover:text-white text-sm ${
                  activePlaceiD === place.id
                    ? 'border border-[#00D8FF] bg-transparent text-white'
                    : ''
                }`}
                onClick={() => getRoute(place)}
              >
                Direcciones
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
