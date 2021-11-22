import classNames from 'classnames';
import React from 'react';

export default function Button({ children, onClick, key, selectedPlace }) {
  return (
    <button
      className={classNames(
        'w-full text-xxs font-semibold duration-300 py-3 px-9 flex justify-between hover:bg-dashboard-hover',
        selectedPlace.placename
          ? 'focus:text-green-base focus:bg-dashboard-hover'
          : ''
      )}
      role="alert"
      onClick={onClick}
      key={key}
    >
      {children}
    </button>
  );
}
