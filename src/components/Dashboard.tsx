import React, { useState } from 'react';
import { Incident, Severity, SortOrder } from '../types';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { AlertTriangle } from 'lucide-react';

interface DashboardProps {
  initialIncidents: Incident[];
}

const Dashboard: React.FC<DashboardProps> = ({ initialIncidents }) => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const handleAddIncident = (newIncident: Omit<Incident, 'id'>) => {
    const nextId = Math.max(0, ...incidents.map(incident => incident.id)) + 1;
    const incidentWithId = { ...newIncident, id: nextId };
    setIncidents([incidentWithId, ...incidents]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">AI Safety Incident Dashboard</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <IncidentForm onAddIncident={handleAddIncident} />
              
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Incident Reports</h2>
                <p className="text-gray-600">
                  {incidents.length} {incidents.length === 1 ? 'incident' : 'incidents'} tracked
                </p>
              </div>

              <FilterControls
                selectedSeverity={selectedSeverity}
                sortOrder={sortOrder}
                onSeverityChange={setSelectedSeverity}
                onSortOrderChange={setSortOrder}
              />

              <IncidentList
                incidents={incidents}
                selectedSeverity={selectedSeverity}
                sortOrder={sortOrder}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;