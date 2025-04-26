import React from 'react';
import { Incident, Severity, SortOrder } from '../types';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
  selectedSeverity: Severity | 'All';
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  selectedSeverity, 
  sortOrder 
}) => {
  // Filter by severity
  const filteredIncidents = selectedSeverity === 'All' 
    ? incidents 
    : incidents.filter(incident => incident.severity === selectedSeverity);

  // Sort by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-600">No incidents found matching the current filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;