import classNames from 'classnames';
import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Button from './Button';

const BrowserDashboard = ({ selectedPlace, data, getMap }) => {
  const [dropdown, setDropdown] = useState('');
  console.log(dropdown);

  return (
    <div className="text-xs min-h-screen text-light-100">
      <section className="p-8 text-xxs text-light-300 flex justify-between">
        Filter by favorite
        <MdArrowDropDown className="w-4 h-4 text-light-button" />
      </section>
      {data.map((mark) => {
        return (
          <>
            <Button
              key={mark.placename}
              onClick={() => {
                setDropdown(dropdown === '' ? mark.placename : '');
                getMap(mark);
              }}
              selectedPlace={selectedPlace}
            >
              {mark.placename}
              {mark.child &&
                (dropdown ? (
                  <MdArrowDropUp className="w-4 h-4 text-light-button transition-all duration-300" />
                ) : (
                  <MdArrowDropDown className="w-4 h-4 text-light-button transition-all duration-300" />
                ))}
            </Button>
            {selectedPlace.placename === mark.placename && mark.child && (
              <ul
                className={classNames(
                  'text-xxs text-light-300 relative transition-all duration-300',
                  dropdown === mark.placename ? 'block' : 'hidden'
                )}
              >
                {mark.child.map((child) => (
                  <li className="px-12 py-2">{child}</li>
                ))}
              </ul>
            )}
          </>
        );
      })}
    </div>
  );
};

export default BrowserDashboard;
