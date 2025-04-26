import React from 'react';
import Dashboard from './components/Dashboard';
import { initialIncidents } from './data/mockData';

function App() {
  return (
    <Dashboard initialIncidents={initialIncidents} />
  );
}

export default App;