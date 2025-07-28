
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-dark-card rounded-xl shadow-md border border-gray-200 dark:border-dark-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className || ''}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={`mb-4 ${className || ''}`}>
    {children}
  </div>
);


interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
    <h3 className={`text-lg font-semibold text-gray-800 dark:text-gray-100 ${className || ''}`}>
        {children}
    </h3>
);


interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
    <div className={className || ''}>
        {children}
    </div>
);
