import css from './NavBar.module.css';
import StyledNavLink from '../StyledNavLink/StyledNavLink';
import { FiUsers } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';

const NavBar: React.FC = () => {
  return (
    <div className={css.navBarContainer}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <StyledNavLink to="/">
            <FiHome />
            <span className={css.homeLabel}>Home</span>
          </StyledNavLink>
        </li>
        <li className={css.navItem}>
          <StyledNavLink to="users">
            <FiUsers />
            <span className={css.usersLabel}>Users</span>
          </StyledNavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
