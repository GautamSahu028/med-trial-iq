import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { trialToNct } from '../../../data/trialCodes';

interface TrialsPanelProps {
  trials: string[];
  selectedDisorder: string;
  domain: 'neurology' | 'oncology';
}

const TrialsPanel: React.FC<TrialsPanelProps> = ({
  trials,
  selectedDisorder,
  domain,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center mb-4">
        <FileText className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">
          Clinical Trials Analyzed
        </h3>
      </div>

      <div className="mb-4">
        <span className="text-sm text-gray-600">
          {domain === 'neurology' ? 'Neurological Disorder' : 'Cancer Type'}:
        </span>
        <span className="ml-2 font-medium text-gray-900">
          {selectedDisorder}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {trials.map((trial, index) => {
          const nctId = trialToNct[trial];
          const href = nctId
            ? `https://clinicaltrials.gov/study/${nctId}`
            : '#';

          return (
            <motion.a
              key={trial}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-900 text-sm">{trial}</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </motion.a>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This knowledge base represents eligibility
          criteria patterns extracted from {trials.length} major clinical trials
          in {selectedDisorder.toLowerCase()}. The percentages indicate how
          frequently each criterion appears across these trials.
        </p>
      </div>
    </motion.div>
  );
};

export default TrialsPanel;
