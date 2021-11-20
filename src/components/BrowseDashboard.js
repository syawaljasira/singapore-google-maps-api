import React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const BrowseDashboard = () => {
  return (
    <div className="text-sm bg-dashboard-dark text-light-100">
      <section className="p-8 text-sm text-light-300 flex justify-between">
        Filter by favorite
        <MdArrowDropDown className="w-4 h-4 text-light-button" />
      </section>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Merlion
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Marina Bay Sands
        <MdArrowDropUp className="w-4 h-4 text-light-button" />
      </div>
      <ul className="text-xs text-light-300">
        <li className="px-14 py-2">ArtScience Museum</li>
        <li className="px-14 py-2">Marina Bay Sands Skypark</li>
        <li className="px-14 py-2">Double Helix Bridge</li>
      </ul>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Garden by the Bay
        <MdArrowDropDown className="w-4 h-4 text-light-button" />
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        China Town
        <MdArrowDropDown className="w-4 h-4 text-light-button" />
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Asian Civilizations Museum
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Clarke Quay
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Fort Canning Park
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Singapore Flyer
      </div>
      <div
        className="
    duration-300
    py-3
    px-9
    flex
    justify-between
  "
        role="alert"
      >
        Orchard Park
      </div>
    </div>
  );
};

export default BrowseDashboard;
