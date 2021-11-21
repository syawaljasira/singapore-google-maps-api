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
        <span className="uppercase font-bold text-dashboard-dark poin">
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
      <LoadScript googleMapsApiKey="AIzaSyDwOATasairywrrDGjF8SBssub0WTzsStk">
        <GoogleMap
          center={center}
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
                  url: '/pngwing.com.png',
                }}
                label={{
                  text: mark.placename,
                  fontSize: '0.65rem',
                  className:
                    'px-3 py-1 bg-dashboard-dark ml-14 mb-4 rounded-xl rounded-r-none ' +
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
