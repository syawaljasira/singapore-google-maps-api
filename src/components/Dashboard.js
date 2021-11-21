import React from 'react';
import { IoEarth } from 'react-icons/io5';

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white text-center">
      <button className="bg-dashboard-blue text-light-100 h-22 px-7">
        <IoEarth className="w-8 h-8 mx-auto" />
        <span className="text-xs">Browse</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <span className="text-xs">Suggest Attraction</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <span className="text-xs">Videos</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <span className="text-xs">Blog</span>
      </button>
      <button className="text-light-200 h-22 w-full hover:bg-dashboard-dark">
        <span className="text-xs">About</span>
      </button>
    </div>
  );
};

export default Dashboard;
