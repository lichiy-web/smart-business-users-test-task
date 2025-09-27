import UsersTable from '../../components/UsersTable/UsersTable';
import css from './UsersPage.module.css';

// export type UserEntity = {
//   name: string;
//   userName: string;
//   email: string;
//   phone: string;
// };

const UsersPage: React.FC = () => {
  return (
    <div className={css.userPageContainer}>
      <h2>UsersPage</h2>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
