import { useEffect } from 'react';
import css from './UsersTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import type { AppDispatch } from '../../redux/store';
import { selectUsers } from '../../redux/users/selectors';
import UserItem from '../UserItem/UserItem';
import UserHeaderItem from '../UserHeaderItem/UserHeaderItem';

const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchUsers({ signal: abortController.signal }));

    return () => abortController.abort();
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const usersPerPage = users.length;
  console.log({ users });

  return (
    <div className={css.userTableHorizontalScrollBox}>
      <p className={css.textContent}>
        Showing {usersPerPage} of {usersPerPage} users
      </p>
      <ul className={css.usersTableContainer}>
        <UserHeaderItem />
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersTable;
