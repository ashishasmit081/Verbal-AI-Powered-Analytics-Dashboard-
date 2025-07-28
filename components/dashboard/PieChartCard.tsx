
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { ChartDataPoint } from '../../types';

interface PieChartCardProps {
  data: ChartDataPoint[];
}

const COLORS = ['#3b82f6', '#10b981', '#f97316', '#8b5cf6'];

export const PieChartCard: React.FC<PieChartCardProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  borderColor: 'rgb(51, 65, 85)',
                  color: '#fff'
                }}
                 labelStyle={{ fontWeight: 'bold' }}
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
