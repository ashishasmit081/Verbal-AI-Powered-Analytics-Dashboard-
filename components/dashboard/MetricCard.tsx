
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Metric } from '../../types';

export const MetricCard: React.FC<Metric> = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
        <p className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
};
