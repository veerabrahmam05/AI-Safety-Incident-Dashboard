import React from 'react';
import { Severity, SortOrder } from '../types';
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface FilterControlsProps {
  selectedSeverity: Severity | 'All';
  sortOrder: SortOrder;
  onSeverityChange: (severity: Severity | 'All') => void;
  onSortOrderChange: (order: SortOrder) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  selectedSeverity,
  sortOrder,
  onSeverityChange,
  onSortOrderChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
      <div className="flex-1">
        <label htmlFor="severity-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Severity
        </label>
        <select
          id="severity-filter"
          value={selectedSeverity}
          onChange={(e) => onSeverityChange(e.target.value as Severity | 'All')}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm bg-white"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
          Sort by Date
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSortOrderChange('newest')}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md shadow-sm ${
              sortOrder === 'newest'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <ArrowDownAZ size={16} />
            Newest First
          </button>
          <button
            type="button"
            onClick={() => onSortOrderChange('oldest')}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md shadow-sm ${
              sortOrder === 'oldest'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <ArrowUpAZ size={16} />
            Oldest First
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;