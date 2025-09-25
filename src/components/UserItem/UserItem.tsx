import type { UserEntity } from '../../pages/UsersPage/UsersPage';
import css from './UserItem.module.css';

export interface UserItemProps {
  user: UserEntity;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  console.log({ user });
  return (
    <>
      <h2>UserItem</h2>
    </>
  );
};

export default UserItem;
