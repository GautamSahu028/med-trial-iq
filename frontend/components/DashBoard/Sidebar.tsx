import React from 'react';
import {
  Brain,
  Heart,
  Stethoscope,
  Activity,
  Zap,
  Eye,
  Microscope,
  Dna,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  activeSubTab: string;
  onTabChange: (tab: string) => void;
  onSubTabChange: (subTab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  activeSubTab,
  onTabChange,
  onSubTabChange,
}) => {
  const neurologyItems = [
    { id: "Alzheimer's Disease", label: "Alzheimer's Disease", icon: Brain },
    { id: "Parkinson's Disease", label: "Parkinson's Disease", icon: Activity },
    { id: 'Epilepsy', label: 'Epilepsy', icon: Zap },
    { id: 'Multiple Sclerosis', label: 'Multiple Sclerosis', icon: Eye },
    { id: 'ALS', label: 'ALS', icon: Stethoscope },
    { id: "Huntington's Disease", label: "Huntington's Disease", icon: Dna },
  ];

  const oncologyItems = [
    { id: 'Lung Cancer', label: 'Lung Cancer', icon: Heart },
    { id: 'Breast Cancer', label: 'Breast Cancer', icon: Heart },
    { id: 'Blood Cancer', label: 'Blood Cancer', icon: Microscope },
    { id: 'Skin Cancer', label: 'Skin Cancer', icon: Eye },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-8">
          Clinical Trial Eligibility
        </h1>

        <nav className="space-y-6">
          {/* Neurology Section */}
          <div>
            <button
              onClick={() => onTabChange('neurology')}
              className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'neurology'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Brain className="inline-block w-5 h-5 mr-2" />
              Neurology
            </button>

            {activeTab === 'neurology' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 ml-4 space-y-1"
              >
                {neurologyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSubTabChange(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSubTab === item.id
                          ? 'bg-blue-100 text-blue-800'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="inline-block w-4 h-4 mr-2" />
                      {item.label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Oncology Section */}
          <div>
            <button
              onClick={() => onTabChange('oncology')}
              className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'oncology'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Microscope className="inline-block w-5 h-5 mr-2" />
              Oncology
            </button>

            {activeTab === 'oncology' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 ml-4 space-y-1"
              >
                {oncologyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSubTabChange(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSubTab === item.id
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="inline-block w-4 h-4 mr-2" />
                      {item.label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
