import UsersTable from '../../components/UsersTable/UsersTable';
import css from './UsersPage.module.css';
import { FaUsersBetweenLines } from 'react-icons/fa6';

const UsersPage: React.FC = () => {
  return (
    <div className={css.userPageContainer}>
      <h2 className={css.usersPageHeader}>
        <span className={css.userManagerIcon}>
          <FaUsersBetweenLines />
        </span>
        User Management
      </h2>
      <p className={css.textContent}>
        Manage and search through your team members and their information.
      </p>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
