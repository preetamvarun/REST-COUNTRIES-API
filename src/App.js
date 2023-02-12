import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './HeaderComponent/Header';
import Countries from './BodyComponent/Countries';
import Showcountry from './BodyComponent/Showcountry';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Error } from './Error';
import { useState } from 'react';

const AppLayout = () => {
  const [modeColor, setModeColor] = useState('Dark Mode');

  function handleChange(modeColor) {
    setModeColor(modeColor === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
  }

  return (
    <React.Fragment>
      <Header modeColor={modeColor} onChange={handleChange} />
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Countries />
      },
      {
        path: '/country/:name',
        element: <Showcountry />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout/>)

root.render(<RouterProvider router={appRouter} />);
