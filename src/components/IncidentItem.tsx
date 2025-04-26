import React, { useState } from 'react';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedDate = new Date(incident.reported_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md mb-4">
      <div className="px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <h3 className="text-lg font-medium text-gray-900">{incident.title}</h3>
          <div className="flex items-center gap-3">
            <SeverityBadge severity={incident.severity} />
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
        </div>
        <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <p className="text-gray-700 mb-2">{incident.description}</p>
        </div>
        <button
          onClick={toggleExpand}
          className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} className="mr-1" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" />
              View Details
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default IncidentItem;