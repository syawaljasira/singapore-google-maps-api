import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-dashboard-light text-white text-center">
      <section className="bg-dashboard-blue text-light-100 py-8 px-5">
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
