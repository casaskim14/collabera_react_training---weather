import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import router from './router';
import Weather from './Weather';

function App() {
  return (<Weather />);
  // return (
  //   <ErrorBoundary>
  //     <RouterProvider router={router} />
  //   </ErrorBoundary>
  // );
}

export default App;
