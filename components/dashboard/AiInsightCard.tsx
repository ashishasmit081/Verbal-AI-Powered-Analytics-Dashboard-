
import React, { useState, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { getAiInsight } from '../../services/geminiService';
import { Skeleton } from '../ui/Skeleton';

interface AiInsightCardProps {
  dataContext: object;
}

export const AiInsightCard: React.FC<AiInsightCardProps> = ({ dataContext }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [insight, setInsight] = useState('');
  const [error, setError] = useState('');

  const handleGetInsight = useCallback(async () => {
    if (!query.trim()) {
      setError('Please enter a question.');
      return;
    }
    setIsLoading(true);
    setError('');
    setInsight('');
    try {
      const result = await getAiInsight(dataContext, query);
      setInsight(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to get insight: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [query, dataContext]);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ask a question about your data to get an AI-generated analysis.
            Try "Which campaign has the best ROAS?" or "Summarize revenue performance."
          </p>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., What are the key takeaways from this month's data?"
            className="w-full p-2 border border-gray-300 dark:border-dark-border rounded-lg bg-transparent focus:ring-2 focus:ring-primary-500 focus:outline-none min-h-[60px]"
            rows={2}
          />
          <Button onClick={handleGetInsight} disabled={isLoading}>
            {isLoading ? 'Analyzing...' : 'Get Insight'}
          </Button>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border min-h-[80px]">
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {insight && <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{insight}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
