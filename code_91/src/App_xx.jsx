import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';
import './App_xx.css';

import {
  HomePage_xx,
  Cabins_xx,
  Contact_xx,
  Login_xx,
  PageNotFound,
} from './pages';

import GuestDashboard_xx from './pages/guestsAuth/GuestDashboard_xx';
import GuestLayout from './ui/GuestLayout';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage_xx />,
  },
  {
    path: '/cabins_xx',
    element: <Cabins_xx />,
  },
  {
    path: '/contact_xx',
    element: <Contact_xx />,
  },
  {
    path: '/login_xx',
    element: <Login_xx />,
  },
  {
    path: '/guest',
    element: (
      <ProtectedRoute>
        <GuestLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard_xx',
        element: <GuestDashboard_xx />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App_xx() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
            styles: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-70)',
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App_xx;
