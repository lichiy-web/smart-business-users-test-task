import { Link, useParams } from 'react-router-dom';
import css from './UserViewPage.module.css';
import { fetchUser } from '../../redux/users/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { resetUsers } from '../../redux/users/slice';
import { selectIsLoading } from '../../redux/app/selectors';
import Loader from '../../components/Loader/Loader';
import { selectCurrentUser } from '../../redux/users/selectors';

const UserViewPage: React.FC = () => {
  const userId = Number(useParams().userId);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetUsers());
    const abortController = new AbortController();
    dispatch(fetchUser({ signal: abortController.signal, userId }));

    return () => abortController.abort();
  }, [dispatch, userId]);

  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  console.log({ currentUser });

  return (
    <div className={css.userViewPageContainer}>
      <h2>UserViewPage</h2>
      <Link to="/users">Back to Users</Link>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default UserViewPage;
