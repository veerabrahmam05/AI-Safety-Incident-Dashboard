import React, { useState } from 'react';
import { Incident, Severity } from '../types';
import { Plus, X } from 'lucide-react';

interface IncidentFormProps {
  onAddIncident: (incident: Omit<Incident, 'id'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onAddIncident }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    // Reset form when hiding
    if (isFormVisible) {
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newIncident: Omit<Incident, 'id'> = {
        title,
        description,
        severity,
        reported_at: new Date().toISOString()
      };
      
      onAddIncident(newIncident);
      resetForm();
      setIsFormVisible(false);
    }
  };

  return (
    <div className="mb-8">
      <button
        onClick={toggleForm}
        className={`flex items-center px-4 py-2 rounded-md shadow-sm text-white font-medium transition-colors duration-200 ${
          isFormVisible ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isFormVisible ? (
          <>
            <X size={18} className="mr-2" />
            Cancel Report
          </>
        ) : (
          <>
            <Plus size={18} className="mr-2" />
            Report New Incident
          </>
        )}
      </button>

      {isFormVisible && (
        <div className="mt-4 bg-white rounded-lg shadow-md border border-gray-200 p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Report New AI Safety Incident</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title*
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border ${
                  errors.title ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Severity*</label>
              <div className="flex gap-4">
                {['Low', 'Medium', 'High'].map((level) => (
                  <label key={level} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="severity"
                      value={level}
                      checked={severity === level}
                      onChange={() => setSeverity(level as Severity)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Submit Incident Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default IncidentForm;