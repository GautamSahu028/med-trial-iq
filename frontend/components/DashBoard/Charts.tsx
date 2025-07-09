import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';

interface ChartData {
  term: string;
  disorder?: string;
  cancerType?: string;
  category: string;
  trialPercentage: string;
}

interface ChartsProps {
  data: ChartData[];
  domain: 'neurology' | 'oncology';
  selectedDisorder?: string;
}

// Define a stricter type for the tooltip's props
interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const Charts: React.FC<ChartsProps> = ({ data, domain, selectedDisorder }) => {
  const filteredData = useMemo(() => {
    if (!selectedDisorder) return data;
    return data.filter(
      (item) =>
        (domain === 'neurology' && item.disorder === selectedDisorder) ||
        (domain === 'oncology' && item.cancerType === selectedDisorder)
    );
  }, [data, selectedDisorder, domain]);

  const categoryData = useMemo(() => {
    const categoryCount = filteredData.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(categoryCount)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }, [filteredData]);

  const trialFrequencyData = useMemo(() => {
    const frequencyMap = filteredData.reduce(
      (acc, item) => {
        const percentMatch = item.trialPercentage.match(/(\d+)%/);
        const percent = percentMatch ? parseInt(percentMatch[1]) : 0;

        const range =
          percent === 100
            ? '100%'
            : percent >= 80
              ? '80-99%'
              : percent >= 60
                ? '60-79%'
                : percent >= 40
                  ? '40-59%'
                  : percent >= 20
                    ? '20-39%'
                    : '0-19%';

        acc[range] = (acc[range] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const order = ['100%', '80-99%', '60-79%', '40-59%', '20-39%', '0-19%'];
    return order
      .filter((range) => frequencyMap[range])
      .map((range) => ({ range, count: frequencyMap[range] }));
  }, [filteredData]);

  const COLORS = [
    '#3B82F6',
    '#10B981',
    '#F59E0B',
    '#EF4444',
    '#8B5CF6',
    '#06B6D4',
    '#84CC16',
    '#F97316',
    '#EC4899',
    '#6B7280',
  ];

  // Use the stricter TooltipProps instead of any
  const CustomTooltip: React.FC<TooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-blue-600">
            Count: <span className="font-medium">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Category Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Category Distribution
          {selectedDisorder && (
            <span className="text-sm font-normal text-gray-600 ml-2">
              ({selectedDisorder})
            </span>
          )}
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, percent }) =>
                  `${category} (${((percent ?? 0) * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                dataKey="count"
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Trial Frequency Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Trial Frequency Distribution
          {selectedDisorder && (
            <span className="text-sm font-normal text-gray-600 ml-2">
              ({selectedDisorder})
            </span>
          )}
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={trialFrequencyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="range" tick={{ fontSize: 12 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Category Breakdown Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 lg:col-span-2"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Terms by Category
          {selectedDisorder && (
            <span className="text-sm font-normal text-gray-600 ml-2">
              ({selectedDisorder})
            </span>
          )}
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="category"
                tick={{ fontSize: 11 }}
                stroke="#6b7280"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Charts;
