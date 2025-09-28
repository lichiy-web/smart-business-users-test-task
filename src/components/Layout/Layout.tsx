import { Outlet } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/app/selectors';

const Layout: React.FC = () => {
  const isError = Boolean(useSelector(selectError));
  const isLoading = useSelector(selectIsLoading);
  // console.log('In Layout!', { isLoading });

  return (
    <div className={css.layoutContainer}>
      <Header />
      <main className={css.pageContainer}>{isError ? <ErrorMessage /> : <Outlet />}</main>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Layout;
