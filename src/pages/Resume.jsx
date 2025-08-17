import React from 'react';
import { Navigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

/**
 * This page redirects /Resume to /resume
 */
export default function ResumeRedirect() {
  return <Navigate to={createPageUrl('resume')} replace />;
}