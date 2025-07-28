
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MetricCard } from './components/dashboard/MetricCard';
import { LineChartCard } from './components/dashboard/LineChartCard';
import { BarChartCard } from './components/dashboard/BarChartCard';
import { PieChartCard } from './components/dashboard/PieChartCard';
import { DataTable } from './components/dashboard/DataTable';
import { AiInsightCard } from './components/dashboard/AiInsightCard';
import { Skeleton } from './components/ui/Skeleton';
import { Icons } from './components/ui/Icons';
import { METRIC_DATA, REVENUE_DATA, USER_DATA, CONVERSION_DATA, CAMPAIGN_DATA, PIE_CHART_DATA } from './constants';
import { Campaign } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [loading, setLoading] = useState<boolean>(true);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const allDataForAI = useMemo(() => ({
    metrics: METRIC_DATA,
    revenueOverTime: REVENUE_DATA,
    userAcquisition: USER_DATA,
    conversions: CONVERSION_DATA,
    campaigns: CAMPAIGN_DATA,
    trafficSources: PIE_CHART_DATA
  }), []);


  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-dark-bg font-sans`}>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleTheme={toggleTheme} theme={theme} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-32 rounded-xl" />)
            ) : (
              METRIC_DATA.map((metric, index) => (
                <MetricCard 
                  key={index} 
                  title={metric.title} 
                  value={metric.value} 
                  change={metric.change} 
                  icon={metric.icon} 
                />
              ))
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3">
              {loading ? <Skeleton className="h-80 rounded-xl" /> : <LineChartCard data={REVENUE_DATA} />}
            </div>
            <div className="lg:col-span-2">
              {loading ? <Skeleton className="h-80 rounded-xl" /> : <BarChartCard data={USER_DATA} />}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2">
                {loading ? <Skeleton className="h-80 rounded-xl" /> : <PieChartCard data={PIE_CHART_DATA} />}
            </div>
             <div className="lg:col-span-3">
                {loading ? <Skeleton className="h-80 rounded-xl" /> : <AiInsightCard dataContext={allDataForAI} />}
            </div>
          </div>

          <div>
            {loading ? (
                <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-md">
                    <Skeleton className="h-12 w-1/3 mb-4"/>
                    <Skeleton className="h-96 w-full"/>
                </div>
            ) : (
              <DataTable<Campaign> 
                columns={[
                  { key: 'name', header: 'Campaign Name' },
                  { key: 'status', header: 'Status' },
                  { key: 'spend', header: 'Spend' },
                  { key: 'revenue', header: 'Revenue' },
                  { key: 'roas', header: 'ROAS' },
                ]} 
                data={CAMPAIGN_DATA} 
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
