import React from 'react';
import { Icons } from './components/ui/Icons';
import { Metric, Campaign, ChartDataPoint, BarChartDataPoint } from './types';

export const METRIC_DATA: Metric[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1% from last month',
    icon: React.createElement(Icons.DollarSign, { className: "h-6 w-6 text-gray-500 dark:text-gray-400" }),
  },
  {
    title: 'Active Users',
    value: '+2350',
    change: '+180.1% from last month',
    icon: React.createElement(Icons.Users, { className: "h-6 w-6 text-gray-500 dark:text-gray-400" }),
  },
  {
    title: 'Conversions',
    value: '+12,234',
    change: '+19% from last month',
    icon: React.createElement(Icons.Zap, { className: "h-6 w-6 text-gray-500 dark:text-gray-400" }),
  },
  {
    title: 'Growth Rate',
    value: '+57.3%',
    change: '+2.1% since last quarter',
    icon: React.createElement(Icons.TrendingUp, { className: "h-6 w-6 text-gray-500 dark:text-gray-400" }),
  },
];

export const REVENUE_DATA: ChartDataPoint[] = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
];

export const USER_DATA: BarChartDataPoint[] = [
    { name: 'Jan', Users: 400 },
    { name: 'Feb', Users: 300 },
    { name: 'Mar', Users: 600 },
    { name: 'Apr', Users: 800 },
    { name: 'May', Users: 500 },
    { name: 'Jun', Users: 700 },
];


export const CONVERSION_DATA: ChartDataPoint[] = [
  { name: 'Week 1', value: 400 },
  { name: 'Week 2', value: 300 },
  { name: 'Week 3', value: 200 },
  { name: 'Week 4', value: 278 },
];

export const PIE_CHART_DATA: ChartDataPoint[] = [
  { name: 'Organic Search', value: 400 },
  { name: 'Direct', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Social Media', value: 200 },
];

export const CAMPAIGN_DATA: Campaign[] = [
  { id: 1, name: 'Summer Sale 2024', status: 'Completed', spend: 5000, revenue: 15000, roas: 3.0 },
  { id: 2, name: 'Q3 Brand Awareness', status: 'Active', spend: 12000, revenue: 8500, roas: 0.71 },
  { id: 3, name: 'Holiday Special Offer', status: 'Active', spend: 7500, revenue: 22000, roas: 2.93 },
  { id: 4, name: 'New Product Launch', status: 'Paused', spend: 3000, revenue: 4500, roas: 1.5 },
  { id: 5, name: 'Email Marketing - Aug', status: 'Active', spend: 1500, revenue: 6000, roas: 4.0 },
  { id: 6, name: 'Google Ads - Retargeting', status: 'Active', spend: 8000, revenue: 19000, roas: 2.38 },
  { id: 7, name: 'Spring Influencer Collab', status: 'Completed', spend: 10000, revenue: 35000, roas: 3.5 },
  { id: 8, name: 'Back to School Promo', status: 'Paused', spend: 2000, revenue: 1500, roas: 0.75 },
];