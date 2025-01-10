import { PrivateRoute } from 'routes/privateRoute/privateRoute';

// Packages
import { ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { DefaultLayout } from 'components/layout';

// Pages
import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { DragonsForm } from 'pages/dragonsForm';

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/dragons/new" element={<DragonsForm />} />
        <Route path="/dragons/edit/:id" element={<DragonsForm />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
