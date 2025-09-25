import { Outlet } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import css from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={css.layoutContainer}>
      <Header />
      <main className={css.pageContainer}>
        <ErrorMessage />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
