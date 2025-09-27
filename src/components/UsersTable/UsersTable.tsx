import { useEffect } from 'react';
import css from './UsersTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import type { AppDispatch } from '../../redux/store';
import { selectUsers } from '../../redux/users/selectors';

const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchUsers({ signal: abortController.signal }));

    return () => abortController.abort();
  }, [dispatch]);

  const users = useSelector(selectUsers);
  console.log({ users });
  return (
    <div className={css.usersTableContainer}>
      <h2>UsersTable</h2>
    </div>
  );
};

export default UsersTable;
