
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { BarChartDataPoint } from '../../types';

interface BarChartCardProps {
  data: BarChartDataPoint[];
}

export const BarChartCard: React.FC<BarChartCardProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Acquisition</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="name" stroke="rgb(156 163 175)" fontSize={12} />
              <YAxis stroke="rgb(156 163 175)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  borderColor: 'rgb(51, 65, 85)',
                  color: '#fff'
                }}
                 labelStyle={{ fontWeight: 'bold' }}
              />
              <Bar dataKey="Users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
