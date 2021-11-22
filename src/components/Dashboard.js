import React from 'react';
import { IoEarth } from 'react-icons/io5';
import { BsChatLeftText } from 'react-icons/bs';
import { MdLiveTv, MdInfo } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white text-center">
      <button className="bg-dashboard-blue text-light-100 h-22 px-8">
        <IoEarth className="w-8 h-8 mx-auto" />
        <span className="text-xxs font-semibold">Browse</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <img
          className="w-8 h-8 border-2 border-light-200 mx-auto rounded-full items-center"
          src="/images/merlion.svg"
          alt="merlion icon"
        />
        <span className="text-xxs font-semibold">Suggest Attraction</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <MdLiveTv className="w-8 h-8 mx-auto" />
        <span className="text-xxs font-semibold">Videos</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <BsChatLeftText className="w-7 h-7 mx-auto" />
        <span className="text-xxs font-semibold">Blog</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <MdInfo className="w-8 h-8 mx-auto" />
        <span className="text-xxs font-semibold">About</span>
      </button>
    </div>
  );
};

export default Dashboard;
