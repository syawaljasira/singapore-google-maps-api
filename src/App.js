import React, { useEffect, useState } from 'react';
import BrowserDashboard from './components/BrowserDashboard';
import Dashboard from './components/Dashboard';
import Map from './components/GoogleMap';

function App() {
  const [data, setData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});

  const getData = async () => {
    await fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log('Error Reading data ' + err));
  };

  const getMap = (data) => {
    setSelectedPlace(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App w-full flex">
      <div className="w-1/12 bg-dashboard-light">
        <Dashboard s />
      </div>
      <div className="w-3/12 border-l border-r border-gray-800 bg-dashboard-dark">
        <BrowserDashboard
          data={data}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          getMap={getMap}
        />
      </div>
      <div className="w-full">
        <Map data={data} getMap={getMap} selectedPlace={selectedPlace} />
      </div>
    </div>
  );
}

export default App;
