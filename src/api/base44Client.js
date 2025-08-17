import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "6890d0b77bd62f6a053b6d15", 
  requiresAuth: true // Ensure authentication is required for all operations
});
