import React from 'react';
import classNames from 'classnames';
import { IoEarth } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SelectedPlace({ selectedPlace }) {
  return (
    <div
      className={classNames(
        'absolute z-20 right-0 w-56 min-h-90vh bg-dashboard-dark text-light-100 transition-all duration-300 ease-out',
        selectedPlace.placename ? 'opacity-100' : 'opacity-0'
      )}
    >
      <img
        src={selectedPlace.image}
        alt={selectedPlace.placename}
        className="w-full"
      />
      <span className="bg-dashboard-blue font-semibold flex px-3 py-1 w-full ">
        {selectedPlace.placename}
      </span>
      <div className="text-xxs text-gray-300 space-y-4 p-5 flex flex-col">
        <span>{selectedPlace.headline}</span>
        <span>{selectedPlace.description}</span>
        <span className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-dashboard-blue" />
          <span className="pt-1">{selectedPlace.address}</span>
        </span>
        <span className="flex items-center space-x-2">
          <IoEarth className="text-green-400" />
          <span className="pt-1">{selectedPlace.website}</span>
        </span>
      </div>
    </div>
  );
}
