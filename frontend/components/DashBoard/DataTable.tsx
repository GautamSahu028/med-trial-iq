import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface TableData {
  term: string;
  disorder?: string;
  cancerType?: string;
  category: string;
  trialPercentage: string;
  inclusionExclusion?: string;
  fhirResource: string;
  standardCode: string;
  unstructured: string;
}

interface DataTableProps {
  data: TableData[];
  domain: 'neurology' | 'oncology';
  selectedDisorder?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  domain,
  selectedDisorder,
}) => {
  const [sortField, setSortField] = useState<keyof TableData>('term');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by selected disorder/cancer type
    if (selectedDisorder) {
      filtered = filtered.filter(
        (item) =>
          (domain === 'neurology' && item.disorder === selectedDisorder) ||
          (domain === 'oncology' && item.cancerType === selectedDisorder)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.standardCode.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    return filtered;
  }, [data, selectedDisorder, searchTerm, categoryFilter, domain]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortField] || '';
      const bValue = b[sortField] || '';

      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [filteredData, sortField, sortDirection]);

  const handleSort = (field: keyof TableData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const categories = useMemo(() => {
    const cats = [...new Set(data.map((item) => item.category))];
    return cats.sort();
  }, [data]);

  const SortIcon = ({ field }: { field: keyof TableData }) => {
    if (sortField !== field)
      return <ChevronUp className="w-4 h-4 opacity-30" />;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search terms, categories, or codes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('term')}
              >
                <div className="flex items-center space-x-1">
                  <span>Eligibility Term</span>
                  <SortIcon field="term" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() =>
                  handleSort(domain === 'neurology' ? 'disorder' : 'cancerType')
                }
              >
                <div className="flex items-center space-x-1">
                  <span>
                    {domain === 'neurology' ? 'Disorder' : 'Cancer Type'}
                  </span>
                  <SortIcon
                    field={domain === 'neurology' ? 'disorder' : 'cancerType'}
                  />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center space-x-1">
                  <span>Category</span>
                  <SortIcon field="category" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('trialPercentage')}
              >
                <div className="flex items-center space-x-1">
                  <span>% of Trials</span>
                  <SortIcon field="trialPercentage" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                FHIR Resource
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Standard Code
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unstructured format
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {item.term}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {domain === 'neurology' ? item.disorder : item.cancerType}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      item.category === 'Clinical'
                        ? 'bg-blue-100 text-blue-800'
                        : item.category === 'Lab' ||
                            item.category === 'Lab/Pathology'
                          ? 'bg-green-100 text-green-800'
                          : item.category === 'Demographics'
                            ? 'bg-purple-100 text-purple-800'
                            : item.category === 'Genetic' ||
                                item.category === 'Genetic/Biomarker'
                              ? 'bg-red-100 text-red-800'
                              : item.category === 'Imaging' ||
                                  item.category === 'Imaging/Biomarker'
                                ? 'bg-yellow-100 text-yellow-800'
                                : item.category === 'Treatment History'
                                  ? 'bg-indigo-100 text-indigo-800'
                                  : item.category === 'Functional'
                                    ? 'bg-pink-100 text-pink-800'
                                    : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {item.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                  {item.trialPercentage}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      item.inclusionExclusion === 'Inclusion'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.inclusionExclusion}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {item.fhirResource}
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <code className="bg-blue-50 px-2 py-1 rounded text-xs text-blue-800">
                    {item.standardCode}
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 italic max-w-xs">
                  <div className="truncate" title={item.unstructured}>
                    "{item.unstructured}"
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>No eligibility terms found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default DataTable;
