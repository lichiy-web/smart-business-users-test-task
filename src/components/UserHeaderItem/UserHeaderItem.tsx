import clsx from 'clsx';
import css from './UserHeaderItem.module.css';

const UserHeaderItem: React.FC = () => {
  return (
    <li className={clsx(css.userItemContainer, css.headerRow)}>
      <div className={css.userItem}>
        <div className={css.name}>Name</div>
        <div className={css.username}>Username</div>
        <div className={css.email}>Email</div>
        <div className={css.phoneContainer}>Phone</div>
      </div>
    </li>
  );
};

export default UserHeaderItem;
