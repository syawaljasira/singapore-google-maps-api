import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [data, setData] = useState([]);

  const center = {
    lat: 1.287466,
    lng: 103.851424,
  };

  const getData = async () => {
    await fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log('Error Reading data ' + err));
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  useEffect(() => {
    getData();
  }, []);

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
          mapContainerClassName="w-full min-h-90vh"
          zoom={15}
        >
          {data.map((mark) => {
            return (
              <Marker
                key={mark.placename}
                position={{
                  lat: mark.latitude,
                  lng: mark.longitude,
                }}
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
