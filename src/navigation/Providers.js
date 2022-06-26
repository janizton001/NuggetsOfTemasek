import React from 'react';
import { AuthProvider } from './AuthContext';
import RootNavigator from './RootNavigator';

const Providers = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

export default Providers;