import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './HeaderComponent/Header';
import Countries from './BodyComponent/Countries';
import Showcountry from './BodyComponent/Showcountry';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Error } from './Error';
import { useState } from 'react';

const AppLayout = () => {
  const [modeColor, setModeColor] = useState('Dark Mode');

  function handleChange(modeColor) {
    setModeColor(modeColor === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
  }

  return (
    <BrowserRouter>
      <div>
        <Header modeColor={modeColor} onChange={handleChange} />
        <Routes>
          <Route path="/" element={<Countries modeColor={modeColor} />} />
          <Route path="/country/:name" element={<Showcountry modeColor={modeColor} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <Countries />
//       },
//       {
//         path: '/country/:name',
//         element: <Showcountry />
//       }
//     ]
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

// root.render(<RouterProvider router={appRouter} />);
