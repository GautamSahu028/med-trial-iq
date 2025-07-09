import React, { useMemo } from 'react';
import { Users, FileText, BarChart3, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsData {
  term: string;
  disorder?: string;
  cancerType?: string;
  category: string;
  trialPercentage: string;
}

interface StatsCardsProps {
  data: StatsData[];
  domain: 'neurology' | 'oncology';
  selectedDisorder?: string;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  data,
  domain,
  selectedDisorder,
}) => {
  const stats = useMemo(() => {
    const filteredData = selectedDisorder
      ? data.filter(
          (item) =>
            (domain === 'neurology' && item.disorder === selectedDisorder) ||
            (domain === 'oncology' && item.cancerType === selectedDisorder)
        )
      : data;

    const totalTerms = filteredData.length;
    const uniqueCategories = new Set(filteredData.map((item) => item.category))
      .size;

    // Calculate high-frequency terms (≥80% of trials)
    const highFrequencyTerms = filteredData.filter((item) => {
      const percentMatch = item.trialPercentage.match(/(\d+)%/);
      const percent = percentMatch ? parseInt(percentMatch[1]) : 0;
      return percent >= 80;
    }).length;

    // Calculate most common category
    const categoryCount = filteredData.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const mostCommonCategory =
      Object.entries(categoryCount).sort(([, a], [, b]) => b - a)[0]?.[0] ||
      'N/A';

    return {
      totalTerms,
      uniqueCategories,
      highFrequencyTerms,
      mostCommonCategory,
    };
  }, [data, domain, selectedDisorder]);

  const cards = [
    {
      title: 'Total Terms',
      value: stats.totalTerms,
      icon: FileText,
      color: 'blue',
      description: 'Eligibility criteria mapped',
    },
    {
      title: 'Categories',
      value: stats.uniqueCategories,
      icon: Filter,
      color: 'green',
      description: 'Distinct criterion types',
    },
    {
      title: 'High Frequency',
      value: stats.highFrequencyTerms,
      icon: BarChart3,
      color: 'purple',
      description: 'Terms in ≥80% of trials',
    },
    {
      title: 'Top Category',
      value: stats.mostCommonCategory,
      icon: Users,
      color: 'orange',
      description: 'Most common criterion type',
      isText: true,
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-lg border ${colorClasses[card.color as keyof typeof colorClasses]} bg-white shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </p>
                <p
                  className={`text-2xl font-bold ${card.isText ? 'text-sm' : ''}`}
                >
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{card.description}</p>
              </div>
              <div
                className={`p-3 rounded-lg ${colorClasses[card.color as keyof typeof colorClasses]}`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;
