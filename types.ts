
import { ReactNode } from 'react';

export interface Campaign {
  id: number;
  name: string;
  status: 'Active' | 'Paused' | 'Completed';
  spend: number;
  revenue: number;
  roas: number;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface BarChartDataPoint {
    name: string;
    Users: number;
}
