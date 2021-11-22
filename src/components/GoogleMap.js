import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mapStyles } from '../utils/mapStyles';
import { MdSettings } from 'react-icons/md';
import { RiCloseCircleFill, RiQuestionFill } from 'react-icons/ri';
import SelectedPlace from './SelectedPlace';

const Map = ({ selectedPlace, data, getMap }) => {
  console.log(selectedPlace);

  const center = {
    lat: 1.28692,
    lng: 103.85457,
  };

  const options = {
    styles: mapStyles,
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  return (
    <>
      <div className="p-8 bg-light-50 flex justify-between">
        <span className="uppercase font-bold text-dashboard-dark">
          Top-Rated Tourist Attractions In Singapore
        </span>
        <div className="flex space-x-2">
          <MdSettings className="w-6 h-6 text-light-300 cursor-pointer" />
          <RiQuestionFill className="w-6 h-6 text-light-300 cursor-pointer" />
          <RiCloseCircleFill
            onClick={() => getMap({})}
            className="w-6 h-6 text-light-300 cursor-pointer"
          />
        </div>
      </div>
      {selectedPlace && <SelectedPlace selectedPlace={selectedPlace} />}
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          center={
            selectedPlace.latitude
              ? { lat: selectedPlace.latitude, lng: selectedPlace.longitude }
              : center
          }
          mapContainerClassName="w-full min-h-90vh"
          zoom={15}
          options={options}
        >
          {data.map((mark) => {
            return (
              <Marker
                key={mark.placename}
                position={{
                  lat: mark.latitude,
                  lng: mark.longitude,
                }}
                onClick={() => getMap(mark)}
                onLoad={onLoad}
                icon={{
                  url:
                    selectedPlace.placename === mark.placename
                      ? '/marker-lg.png'
                      : '/marker.png',
                }}
                label={{
                  text: mark.placename,
                  fontSize:
                    selectedPlace.placename === mark.placename
                      ? '0.85rem'
                      : '0.65rem',
                  className:
                    selectedPlace.placename === mark.placename
                      ? 'px-3 py-2 bg-green-base mb-6 rounded-full rounded-r-none ' +
                        mark.marginLeft
                      : 'px-3 py-1 bg-dashboard-dark mb-4 rounded-full rounded-r-none ' +
                        mark.marginLeft,
                  color: '#F4F7FA',
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
