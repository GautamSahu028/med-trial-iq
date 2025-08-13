import { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import StatsCards from './StatsCards';
import Charts from './Charts';
import DataTable from './DataTable';
import TrialsPanel from './TrialsPanel';
import {
  transformNeurologyData,
  transformOncologyData,
  trialMappings,
  type EligibilityTerm,
  type RawNeurologyData,
  type RawOncologyData,
} from '../../../data/dataMapper';

// Import JSON directly so it's bundled by Webpack/Vite
import rawNeurologyData from '../../../data/Neurology.json';
import rawOncologyData from '../../../data/Oncology.json';

function DashBoardPage() {
  const [activeTab, setActiveTab] = useState<'neurology' | 'oncology'>(
    'neurology'
  );
  const [activeSubTab, setActiveSubTab] = useState<string>(
    "Alzheimer's Disease"
  );

  // Transform imported JSON at build time
  const neurologyData: EligibilityTerm[] = useMemo(
    () => transformNeurologyData(rawNeurologyData as RawNeurologyData[]),
    []
  );
  const oncologyData: EligibilityTerm[] = useMemo(
    () => transformOncologyData(rawOncologyData as RawOncologyData[]),
    []
  );

  // Pick the right dataset
  const currentData = useMemo(
    () => (activeTab === 'neurology' ? neurologyData : oncologyData),
    [activeTab, neurologyData, oncologyData]
  );

  // Determine which trials to show
  const currentTrials = useMemo(
    () =>
      trialMappings[activeTab][
        activeSubTab as keyof (typeof trialMappings)[typeof activeTab]
      ] || [],
    [activeTab, activeSubTab]
  );

  // Handlers
  const handleTabChange = (tab: string) => {
    setActiveTab(tab as 'neurology' | 'oncology');
    setActiveSubTab(
      tab === 'neurology' ? "Alzheimer's Disease" : 'Lung Cancer'
    );
  };

  const handleSubTabChange = (subTab: string) => setActiveSubTab(subTab);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeTab={activeTab}
        activeSubTab={activeSubTab}
        onTabChange={handleTabChange}
        onSubTabChange={handleSubTabChange}
      />

      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {activeTab === 'neurology' ? 'Neurology' : 'Oncology'}{' '}
                    Eligibility Terms
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Knowledge base for {activeSubTab}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === 'neurology'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {activeTab === 'neurology'
                      ? 'Neurological Disorders'
                      : 'Cancer Types'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentData.length} terms
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <StatsCards
              data={currentData}
              domain={activeTab}
              selectedDisorder={activeSubTab}
            />

            {/* Charts */}
            <Charts
              data={currentData}
              domain={activeTab}
              selectedDisorder={activeSubTab}
            />

            {/* Trials Panel */}
            <TrialsPanel
              trials={currentTrials}
              selectedDisorder={activeSubTab}
              domain={activeTab}
            />

            {/* Data Table */}
            <DataTable
              data={currentData}
              domain={activeTab}
              selectedDisorder={activeSubTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
