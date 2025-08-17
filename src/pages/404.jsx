import React from 'react';
import { Navigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

/**
 * This page will be rendered for any route that is not found.
 * It redirects the user to the resume page.
 */
export default function NotFoundRedirect() {
  return <Navigate to={createPageUrl('resume')} replace />;
}