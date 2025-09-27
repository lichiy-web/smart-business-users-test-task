import type { StateUserEntity } from '../../redux/api/types';
import css from './UserItem.module.css';

export interface UserItemProps {
  user: StateUserEntity;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  console.log({ user });
  return (
    <div className={css.userItemContainer}>
      <h2>UserItem</h2>
    </div>
  );
};

export default UserItem;
