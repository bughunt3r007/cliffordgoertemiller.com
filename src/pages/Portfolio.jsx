import React from 'react';
import { Navigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

/**
 * This page redirects /Portfolio to /portfolio
 */
export default function PortfolioRedirect() {
  return <Navigate to={createPageUrl('portfolio')} replace />;
}