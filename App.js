import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import MainNavigator from './src/navigation/MainNavigation';
import {AuthProvider} from './src/AuthProvider';
import Toast from 'react-native-toast-message';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MainNavigator />
        <Toast />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
