import React from 'react';

export default function Button({ children, onClick, key }) {
  return (
    <button
      className="w-full text-xxs font-semibold duration-300 py-3 px-9 flex justify-between hover:bg-dashboard-light"
      role="alert"
      onClick={onClick}
      key={key}
    >
      {children}
    </button>
  );
}
