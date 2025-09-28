import { useEffect } from 'react';
import css from './UsersTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import type { AppDispatch } from '../../redux/store';
import { selectFilteredUsers, selectUsers } from '../../redux/users/selectors';
import UserItem from '../UserItem/UserItem';
import UserHeaderItem from '../UserHeaderItem/UserHeaderItem';
import { resetUsers } from '../../redux/users/slice';

const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(resetUsers());
    const abortController = new AbortController();
    dispatch(fetchUsers({ signal: abortController.signal }));

    return () => abortController.abort();
  }, [dispatch]);

  const filteredUsers = useSelector(selectFilteredUsers);
  const users = useSelector(selectUsers);
  const usersPerPage = filteredUsers.length;
  const usersTotal = users.length;

  return (
    <div className={css.userTableHorizontalScrollBox}>
      <p className={css.textContent}>
        Showing {usersPerPage} of {usersTotal} users
      </p>
      <ul className={css.usersTableContainer}>
        <UserHeaderItem />
        {filteredUsers.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersTable;
