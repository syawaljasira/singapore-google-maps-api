import BrowseDashboard from './components/BrowseDashboard';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App w-full flex">
      <div className="w-1/12">
        <Dashboard />
      </div>
      <div className="w-3/12">
        <BrowseDashboard />
      </div>
      <div className="w-full">react</div>
    </div>
  );
}

export default App;
