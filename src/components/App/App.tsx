import './App.css';
import Loader from '../Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';

const UsersPage = lazy(() => import('../../pages/UsersPage/UsersPage'));
const UserViewPage = lazy(() => import('../../pages/UserViewPage/UserViewPage'));

function App() {
  return (
    <div className="appContainer">
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="user/:userId" element={<UserViewPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
