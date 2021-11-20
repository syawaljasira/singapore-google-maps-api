import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <>
      <div className="p-8 bg-light-50">
        <span className="uppercase font-bold text-dashboard-dark">
          Top-Rated Tourist Attractions In Singapore
        </span>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyDwOATasairywrrDGjF8SBssub0WTzsStk">
        <GoogleMap
          center={center}
          mapContainerClassName="w-full h-full"
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
