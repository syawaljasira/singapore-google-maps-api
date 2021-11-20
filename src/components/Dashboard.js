import React from 'react';
import { IoEarth } from 'react-icons/io5';

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white text-center">
      <section className="bg-dashboard-blue text-light-100 py-4 px-5">
        <IoEarth className="w-8 h-8 mx-auto" />
        <span className="text-sm">Browse</span>
      </section>
      <section className="text-light-200 py-8 px-5">
        <span className="text-sm">Suggest Attraction</span>
      </section>
      <section className="text-light-200 py-8 px-5">
        <span className="text-sm">Videos</span>
      </section>
      <section className="text-light-200 py-8 px-5">
        <span className="text-sm">Blog</span>
      </section>
      <section className="text-light-200 py-8 px-5">
        <span className="text-sm">About</span>
      </section>
    </div>
  );
};

export default Dashboard;
