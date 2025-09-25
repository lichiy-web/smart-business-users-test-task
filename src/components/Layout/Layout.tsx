import { Outlet } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import css from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={css.pageContainer}>
        <ErrorMessage />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
