import React, { useState, useMemo } from 'react';
import { Campaign } from '../../types';
import { Icons } from '../ui/Icons';
import { Button } from '../ui/Button';

interface Column<T> {
  key: keyof T;
  header: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export function DataTable<T extends { id: number }>({ columns, data }: DataTableProps<T>) {
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const getStatusClass = (status: string) => {
    switch(status) {
        case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
        case 'Paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
        case 'Completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl shadow-md border border-gray-200 dark:border-dark-border p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Campaign Performance</h3>
        <input
          type="text"
          placeholder="Filter campaigns..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-transparent focus:ring-2 focus:ring-primary-500 focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map(col => (
                <th key={String(col.key)} scope="col" className="px-6 py-3" onClick={() => requestSort(col.key)}>
                  <div className="flex items-center cursor-pointer">
                    {col.header}
                    {sortConfig?.key === col.key && (
                       <Icons.ChevronDown className={`w-4 h-4 ml-1 transition-transform ${sortConfig.direction === 'asc' ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(item => (
              <tr key={item.id} className="bg-white dark:bg-dark-card border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {columns.map(col => (
                  <td key={String(col.key)} className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {col.key === 'status' ? (
                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(String(item[col.key]))}`}>
                            {String(item[col.key])}
                       </span>
                    ) : (
                        item[col.key] as React.ReactNode
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)}-{Math.min(currentPage * itemsPerPage, sortedData.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{sortedData.length}</span>
        </span>
        <div className="inline-flex items-center -space-x-px">
          <Button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            variant="outline"
            className="rounded-r-none"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            variant="outline"
            className="rounded-l-none"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}